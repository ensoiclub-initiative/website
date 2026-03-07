<script lang="ts">
	interface Props {
		open: boolean;
		onToggle: () => void;
	}

	let { open, onToggle }: Props = $props();
</script>

<button
	class="burger"
	aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
	aria-expanded={open}
	onclick={onToggle}
>
	<span class="burger-line"></span>
	<span class="burger-line"></span>
	<span class="burger-line"></span>
</button>

<style>
	.burger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 6px;
		width: 2rem;
		height: 2rem;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		color: var(--color-ivoire);
	}

	.burger-line {
		display: block;
		width: 100%;
		height: 2px;
		background: currentColor;
		transition: transform var(--transition-normal);
	}

	@media (max-width: 768px) {
		.burger {
			display: flex;
		}
	}
</style>
