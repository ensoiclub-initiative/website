<script lang="ts">
	import { base, resolve } from '$app/paths';
	import { SITE } from '$lib/config';

	interface Props {
		class?: string;
		size?: number;
		variant?: 'light' | 'dark';
	}

	let { class: className = '', size = 48, variant = 'dark' }: Props = $props();

	const logoUrl = `${base}/logo.png`;
</script>

<a href={resolve('/')} class="logo {variant} {className}" aria-label="{SITE.name} - Accueil">
	<img
		src={logoUrl}
		alt=""
		width={size}
		height={size}
		class="logo-img"
	/>
</a>

<style>
	.logo {
		display: flex;
		align-items: center;
		transition: opacity var(--transition-fast);
	}
	.logo-img {
		display: block;
		object-fit: contain;
	}
	.logo:hover {
		opacity: 0.9;
	}
</style>
