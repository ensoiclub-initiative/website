<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import { NAV_ITEMS } from '$lib/config';
	import Burger from './Burger.svelte';
	import Logo from './Logo.svelte';

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="header">
	<div class="header-inner container">
		<Logo size={40} />
		<nav class="nav" class:open={menuOpen}>
			<ul class="nav-list">
				{#each NAV_ITEMS as item (item.href)}
					<li>
						<a
							href={resolve(item.href)}
							class="nav-link"
							class:active={$page.url.pathname === item.href ||
								(item.href !== '/' && $page.url.pathname.startsWith(item.href))}
							onclick={closeMenu}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<Burger open={menuOpen} onToggle={toggleMenu} />
	</div>
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: var(--color-bg-primary);
		border-bottom: 1px solid var(--color-overlay-10);
		overflow-x: hidden;
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-md) var(--space-lg);
		min-height: var(--header-height);
	}

	.nav-list {
		display: flex;
		gap: var(--space-xl);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-link {
		color: var(--color-text-primary);
		font-family: var(--font-heading);
		font-weight: 500;
		font-size: 0.95rem;
		padding: var(--space-sm) 0;
		position: relative;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--color-accent);
		transition: width var(--transition-normal);
	}

	.nav-link:hover::after,
	.nav-link.active::after {
		width: 100%;
	}

	.nav-link.active {
		color: var(--color-accent);
	}

	@media (max-width: 768px) {
		.nav {
			position: fixed;
			top: var(--header-height);
			left: 0;
			right: 0;
			background: var(--color-bg-primary);
			padding: var(--space-xl);
			transform: translateY(-100%);
			opacity: 0;
			visibility: hidden;
			transition:
				transform var(--transition-normal),
				opacity var(--transition-normal),
				visibility var(--transition-normal);
			border-bottom: 1px solid var(--color-overlay-10);
		}

		.nav.open {
			transform: translateY(0);
			opacity: 1;
			visibility: visible;
		}

		.nav-list {
			flex-direction: column;
			gap: var(--space-lg);
			align-items: center;
		}
	}
</style>
