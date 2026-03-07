import { env } from '$env/dynamic/public';
import { resolve } from '$app/paths';
import { SITEMAP_ROUTES } from '$lib/config';

export const prerender = true;

function getBaseUrl(): string {
	const url = (env.PUBLIC_SITE_URL ?? '').replace(/\/$/, '') || 'https://ensoiclub-initiative.github.io/website';
	try {
		return new URL(url).origin;
	} catch {
		return url;
	}
}

export function GET(): Response {
	const baseUrl = getBaseUrl();
	const urls = SITEMAP_ROUTES.map(
		(route) =>
			`  <url><loc>${baseUrl}${resolve(route)}</loc><changefreq>monthly</changefreq><priority>${route === '/' ? '1.0' : '0.8'}</priority></url>`
	).join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
