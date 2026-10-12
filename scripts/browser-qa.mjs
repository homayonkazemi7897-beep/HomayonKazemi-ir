import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const root = process.env.QA_URL || 'http://127.0.0.1:4321';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext({ permissions: ['clipboard-read', 'clipboard-write'] });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const results = [];
await mkdir('qa', { recursive: true });
try {
  for (const route of ['/', '/en/']) {
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 960 });
      await page.goto(`${root}${route}`, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const bounds = await page.evaluate(() => ({ viewport: innerWidth, content: document.documentElement.scrollWidth }));
      assert.ok(bounds.content <= bounds.viewport, `Horizontal overflow at ${route} ${width}: ${bounds.content}`);
      assert.equal(await page.locator('main h1').count(), 1);
      assert.equal(await page.locator('.skill-tags span').count(), 6);
      assert.equal(await page.locator('.workflow-grid article').count(), 4);
      assert.equal(await page.locator('.message-links a').first().getAttribute('href'), 'https://wa.me/989305907217');
      assert.equal(await page.locator('.message-links a').nth(1).getAttribute('href'), 'https://t.me/+989305907217');
      const resumeResponse = await page.request.get(new URL(await page.locator('.resume-download').getAttribute('href'), root).href);
      assert.equal(resumeResponse.status(), 200);
      assert.ok((await resumeResponse.body()).subarray(0, 5).toString().startsWith('%PDF-'));
      const images = await page.locator('main img').evaluateAll(images => images.filter(img => img.loading !== 'lazy').every(img => img.complete && img.naturalWidth > 0));
      assert.ok(images, `Hero image loaded ${route} ${width}`);
      if (width === 390) {
        await page.locator('.menu-toggle').click();
        assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'true');
        await page.locator('#mobile-nav a[href="#work"]').click();
        assert.equal(await page.locator('#mobile-nav').isVisible(), false);
        await page.locator('.education summary').click();
        assert.equal(await page.locator('.education').getAttribute('open'), '');
        await page.locator('.education summary').click();
        await page.locator('.copy-email').click();
        assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'homayonkazemi7897@gmail.com');
      }
      if (width === 390 || width === 1440) {
        await page.evaluate(async () => { for (const img of document.querySelectorAll('img')) { img.loading = 'eager'; await img.decode(); } });
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
        await page.screenshot({ path: `qa/${route === '/' ? 'fa' : 'en'}-${width}.png`, fullPage: true });
      }
      results.push({ route, width, horizontalOverflow: false });
    }
  }
  await page.goto(root);
  await page.locator('.language-switch').click();
  assert.ok(page.url().endsWith('/en/'));
  await page.locator('.language-switch').click();
  assert.equal(await page.locator('html').getAttribute('dir'), 'rtl');
  assert.deepEqual(errors, []);
  await writeFile('qa/results.json', JSON.stringify({ results, browserErrors: errors, menu: 'passed', education: 'passed', copyEmail: 'passed', languageSwitch: 'passed' }, null, 2));
  console.log('PASS: both languages at 320, 390, 768, 1024 and 1440px; menu, education, clipboard, language switch; no browser errors.');
} finally { await browser.close(); }
