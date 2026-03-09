<script lang="ts">
	import { base } from '$app/paths';
	import { onNavigate } from '$app/navigation';
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	const faviconUrl = `${base}/logo.png`;

	onNavigate((navigation) => {
		if (typeof document === 'undefined' || !document.startViewTransition) return;
		return new Promise<void>((done) => {
			document.startViewTransition!(async () => {
				done();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={faviconUrl} type="image/png" />
</svelte:head>

<a href="#main-content" class="skip-link">Aller au contenu principal</a>
<Header />
<main id="main-content" class="main" tabindex="-1">
	{@render children()}
</main>
<Footer />
