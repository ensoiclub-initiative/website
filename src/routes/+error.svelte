<script lang="ts">
	import { page } from '$app/stores';
	import { SITE } from '$lib/config';
	import Section from '$lib/components/Section.svelte';
	import Button from '$lib/components/Button.svelte';

	const status = $page.status ?? 500;
	const is404 = status === 404;
</script>

<svelte:head>
	<title>{is404 ? 'Page introuvable' : 'Erreur'} | {SITE.name}</title>
</svelte:head>

<Section>
	<div class="error-content">
		<p class="error-status" aria-hidden="true">{status}</p>
		<h1>{is404 ? 'Page introuvable' : 'Une erreur est survenue'}</h1>
		<p class="error-message">
			{#if is404}
				La page que tu cherches n'existe pas ou a été déplacée.
			{:else}
				Un problème technique s'est produit. Notre équipe en a été informée.
			{/if}
		</p>
		<Button href="/">Retour à l'accueil</Button>
	</div>
</Section>

<style>
	.error-content {
		text-align: center;
		max-width: 28rem;
		margin: 0 auto;
		padding: var(--space-2xl) 0;
	}

	.error-status {
		font-family: var(--font-heading);
		font-size: 4rem;
		font-weight: 700;
		line-height: 1;
		color: var(--color-violet-lavande);
		opacity: 0.6;
		margin-bottom: var(--space-md);
	}

	h1 {
		font-size: 1.5rem;
		margin: 0 0 var(--space-md);
	}

	.error-message {
		color: var(--color-text-secondary);
		margin-bottom: var(--space-xl);
	}
</style>
