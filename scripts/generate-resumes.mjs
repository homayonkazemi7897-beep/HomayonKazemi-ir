import { chromium } from '@playwright/test';
import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createCanvas } from '@napi-rs/canvas';
const root = process.env.QA_URL || 'http://127.0.0.1:4321';
await mkdir('public/resume', { recursive: true });
await mkdir('output/pdf', { recursive: true });
await mkdir('tmp/pdfs', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const page = await browser.newPage();
  for (const locale of ['fa', 'en']) {
    await page.goto(`${root}/resume/${locale}/`, { waitUntil: 'networkidle' });
    await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(image => image.decode())); });
    const overflow = await page.evaluate(() => { const footer = document.querySelector('footer').getBoundingClientRect(); const main = document.querySelector('.cv-columns').getBoundingClientRect(); return main.bottom > footer.top - 10; });
    assert.equal(overflow, false, `Resume content overlaps footer: ${locale}`);
    await page.emulateMedia({ media: 'print' });
    const file = `public/resume/homayoun-kazemi-${locale}.pdf`;
    await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true, outline: true });
    await copyFile(file, `output/pdf/homayoun-kazemi-${locale}.pdf`);
  }
} finally { await browser.close(); }
const { getDocument } = await import('pdfjs-dist/legacy/build/pdf.mjs');
const evidence = [];
for (const locale of ['fa', 'en']) {
  const file = `public/resume/homayoun-kazemi-${locale}.pdf`;
  const loadingTask = getDocument({ data: new Uint8Array(await readFile(file)), useSystemFonts: true, isEvalSupported: false });
  const doc = await loadingTask.promise;
  assert.equal(doc.numPages, 1, `Expected one A4 page: ${locale}`);
  const page = await doc.getPage(1);
  const text = (await page.getTextContent()).items.map(item => item.str).join(' ');
  for (const token of ['Node.js', 'React', 'Django', 'PHP', 'homayonkazemi.ir', 'jornilo.com']) assert.ok(text.includes(token), `Missing ${token} in ${locale} PDF`);
  const links = (await page.getAnnotations()).filter(annotation => annotation.url);
  assert.ok(links.some(link => link.url === 'https://wa.me/989305907217'));
  assert.ok(links.some(link => link.url === 'https://t.me/+989305907217'));
  const viewport = page.getViewport({ scale: 1.7 });
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  await page.render({ canvasContext: canvas.getContext('2d'), viewport, canvas }).promise;
  await writeFile(`tmp/pdfs/resume-${locale}.png`, canvas.toBuffer('image/png'));
  evidence.push({ locale, pages: doc.numPages, links: links.length, textVerified: true });
  await loadingTask.destroy();
}
await writeFile('tmp/pdfs/results.json', JSON.stringify(evidence, null, 2));
console.log('Generated and rendered one-page Persian and English PDFs; text, skills and messaging hyperlinks verified.');
