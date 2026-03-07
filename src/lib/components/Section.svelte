<script lang="ts">
	interface Props {
		class?: string;
		variant?: 'default' | 'light' | 'accent';
		id?: string;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', variant = 'default', id, children }: Props = $props();
</script>

<section class="section {variant} {className}" {id}>
	<div class="section-inner">
		{#if children}
			{@render children()}
		{/if}
	</div>
</section>

<style>
	.section {
		padding: var(--space-3xl) var(--space-lg);
		overflow-x: hidden;
	}

	.section-inner {
		width: 100%;
		max-width: var(--container-max);
		margin: 0 auto;
		min-width: 0;
	}

	.section.light {
		background-color: var(--color-ivoire);
		color: var(--color-text-dark);
	}

	.section.light :global(a) {
		color: var(--color-bleu-prusse);
	}

	.section.accent {
		background-color: var(--color-overlay-accent-08);
	}

	@media (max-width: 640px) {
		.section {
			padding: var(--space-2xl) var(--space-md);
		}
	}
</style>
