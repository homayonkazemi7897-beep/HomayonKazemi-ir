# Homayoun Kazemi — personal portfolio

Local project: `D:\homayonkazemi-ir`

## Run

```sh
npm install
npm run dev
```

Persian: http://localhost:4321/ — English: http://localhost:4321/en/

## Check and build

```sh
npm run check
npm run build
npm run verify
```

The normal local build deliberately uses `noindex`; it is a review build.
For the final server deployment, run `npm run build:production`. This enables indexing and verifies the production robots/meta configuration. Upload the contents of `dist/` only after the site is complete and ready for the user's server. No server deployment has been performed.

## Content and design

- `src/data/site.ts`: user-supplied identity, education, contact, projects, and bilingual content.
- `src/components/Home.astro`: bilingual page, navigation, project links, biography, email actions.
- `src/styles/global.css`: responsive design and locally hosted fonts.
- `src/layouts/BaseLayout.astro`: SEO metadata, canonical, hreflang, Person/ProfilePage schema, sharing image.
- `src/assets/`: supplied photos, automatically optimized by Astro for the displayed sizes.

Contact number confirmed by the owner: 09305907217. WhatsApp and Telegram links use its international form. No project technology stack, client testimonial, outcome metric, or electrical engineering degree level has been invented.
The two project illustrations are editorial graphics, not website screenshots or claims about their interface.

## Before release

- Confirm the final appearance and English name spelling (`Homayoun Kazemi`).
- Build with `npm run build:production` and deploy to the user-provided server.
- Verify HTTPS, redirects, live pages, and image URLs on `homayonkazemi.ir`.
- Connect the owner's Google Search Console property and submit `/sitemap.xml`.

Credentials are not stored in the project. Search engine ranking and indexing require post-publication monitoring.

## Résumé PDFs
Run npm run resume:generate while the local dev server is running. This generates public/resume/homayoun-kazemi-fa.pdf and homayoun-kazemi-en.pdf, copies deliverables to output/pdf, and renders verification PNGs under tmp/pdfs. Regenerate after changes to profile or resume content. Both PDFs include clickable project, GitHub and messaging links. Run npm run test:browser for responsive layout and download checks. No fabricated client feedback is published.
