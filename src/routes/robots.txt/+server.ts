import { resolve } from '$app/paths';
import { env } from '$env/dynamic/public';

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
	const sitemapUrl = `${baseUrl}${resolve('/sitemap.xml')}`;
	const content = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`;

	return new Response(content, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=3600'
		}
	});
}
