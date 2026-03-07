<script lang="ts">
	import { page } from '$app/stores';
	import { SITE } from '$lib/config';
	import { getBaseUrlFromEnv } from '$lib/url';

	interface Props {
		title?: string;
		description: string;
		fullTitle?: string;
		ogImage?: string;
	}

	let { title = '', description, fullTitle, ogImage }: Props = $props();

	const baseUrl = $derived(getBaseUrlFromEnv() || $page.url.origin);
	const canonicalUrl = $derived(
		baseUrl ? `${baseUrl}${$page.url.pathname}` : ''
	);
	const pageTitle = $derived(fullTitle ?? (title ? `${title} | ${SITE.name}` : SITE.name));
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	{#if canonicalUrl}
		<link rel="canonical" href={canonicalUrl} />
		<meta property="og:url" content={canonicalUrl} />
		<meta property="og:title" content={pageTitle} />
		<meta property="og:description" content={description} />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="fr_FR" />
		{#if ogImage}
			<meta property="og:image" content={ogImage} />
		{/if}
		<meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
		<meta name="twitter:title" content={pageTitle} />
		<meta name="twitter:description" content={description} />
		{#if ogImage}
			<meta name="twitter:image" content={ogImage} />
		{/if}
	{/if}
</svelte:head>
