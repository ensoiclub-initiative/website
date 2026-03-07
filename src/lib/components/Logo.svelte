<script lang="ts">
	import { resolve } from '$app/paths';
	import { SITE } from '$lib/config';

	interface Props {
		class?: string;
		size?: number;
		variant?: 'light' | 'dark';
	}

	let { class: className = '', size = 48, variant = 'dark' }: Props = $props();
</script>

<!-- Placeholder logo (CDC: logo cf fichier) -->
<a href={resolve('/')} class="logo {variant} {className}" aria-label="{SITE.name} - Accueil">
	<span
		class="logo-placeholder"
		style="width: {size}px; height: {size}px; font-size: {size * 0.25}px;"
	>
		logo
	</span>
</a>

<style>
	.logo {
		display: flex;
		align-items: center;
		transition: opacity var(--transition-fast);
	}
	.logo-placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-overlay-15);
		border-radius: 4px;
		font-family: var(--font-heading);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.logo.dark {
		color: var(--color-ivoire);
	}
	.logo.light {
		color: var(--color-bleu-prusse);
	}
	.logo:hover {
		opacity: 0.9;
	}
</style>
