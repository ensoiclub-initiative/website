<script lang="ts">
	import { resolve } from '$app/paths';

	interface Props {
		href: string;
		variant?: 'primary' | 'secondary';
		external?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let {
		href,
		variant = 'primary',
		external = false,
		class: className = '',
		children
	}: Props = $props();
</script>

{#if external}
	<a {href} class="button {variant} {className}" target="_blank" rel="external noopener noreferrer">
		{#if children}
			{@render children()}
		{/if}
	</a>
{:else}
	<a href={resolve(href as Parameters<typeof resolve>[0])} class="button {variant} {className}">
		{#if children}
			{@render children()}
		{/if}
	</a>
{/if}

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-md) var(--space-xl);
		font-family: var(--font-heading);
		font-weight: 600;
		border-radius: 4px;
		transition:
			background-color var(--transition-fast),
			color var(--transition-fast),
			border-color var(--transition-fast);
	}

	.button.primary {
		background-color: var(--color-violet-lavande);
		color: var(--color-bleu-prusse);
	}

	.button.primary:hover {
		background-color: var(--color-violet-lavande-hover);
		color: var(--color-bleu-prusse);
	}

	.button.secondary {
		border: 2px solid var(--color-violet-lavande);
		color: var(--color-violet-lavande);
		font-weight: 500;
		background-color: transparent;
	}

	.button.secondary:hover {
		background-color: var(--color-violet-lavande-hover);
		color: var(--color-bleu-prusse);
	}
</style>
