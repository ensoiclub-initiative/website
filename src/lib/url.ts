/**
 * URL utilities - single source for base URL logic (DRY)
 */

import { env } from '$env/dynamic/public';
import { SITE } from '$lib/config';

function getRawEnvUrl(): string {
	return (env.PUBLIC_SITE_URL ?? '').replace(/\/$/, '');
}

function getRawBaseUrl(): string {
	return getRawEnvUrl() || SITE.baseUrlFallback;
}

/**
 * Returns the site base URL (origin only).
 * Uses PUBLIC_SITE_URL env or fallback for prerender/build.
 */
export function getBaseUrl(): string {
	const url = getRawBaseUrl();
	try {
		return new URL(url).origin;
	} catch {
		return url;
	}
}

/**
 * Returns the full site base URL (origin + path) for links.
 * Uses PUBLIC_SITE_URL env or fallback.
 */
export function getSiteBaseUrl(): string {
	return getRawBaseUrl();
}

/**
 * Returns full site base URL when env is set, else empty.
 * Use with client fallback for redirect URLs.
 */
export function getSiteBaseUrlOptional(): string {
	return getRawEnvUrl();
}

/**
 * Returns origin from env, or empty string if not set.
 * Use with client fallback (e.g. $page.url.origin) in components.
 */
export function getBaseUrlFromEnv(): string {
	const url = getRawEnvUrl();
	if (!url) return '';
	try {
		return new URL(url).origin;
	} catch {
		return url;
	}
}
