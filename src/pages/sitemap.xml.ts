import type { APIRoute } from 'astro';
import { canonical } from '../data/site';

export const GET: APIRoute = () => {
  const alternatives = `<xhtml:link rel="alternate" hreflang="fa" href="${canonical('fa')}"/><xhtml:link rel="alternate" hreflang="en" href="${canonical('en')}"/><xhtml:link rel="alternate" hreflang="x-default" href="${canonical('fa')}"/>`;
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n<url><loc>${canonical('fa')}</loc>${alternatives}</url>\n<url><loc>${canonical('en')}</loc>${alternatives}</url>\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
