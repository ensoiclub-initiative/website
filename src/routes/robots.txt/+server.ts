import { resolve } from '$app/paths';
import { getBaseUrl } from '$lib/url';

export const prerender = true;

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
