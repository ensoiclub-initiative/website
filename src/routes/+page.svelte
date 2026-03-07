<script lang="ts">
	import { resolve } from '$app/paths';
	import { CONTACT, SITE } from '$lib/config';
	import Button from '$lib/components/Button.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Section from '$lib/components/Section.svelte';
	import Logo from '$lib/components/Logo.svelte';
</script>

<PageMeta
	fullTitle="{SITE.name} | {SITE.slogan}"
	description="{SITE.name} - Association de prévention en santé mentale pour les étudiants et jeunes actifs. Ateliers accessibles, déstigmatisés et intégrés au quotidien."
/>

<Section id="hero">
	<div class="hero">
		<div class="hero-brand">
			<div class="hero-logo">
				<Logo size={80} />
			</div>
			<h1 class="hero-title">{SITE.nameStyled} <em>{SITE.nameSuffix}</em></h1>
			<p class="hero-slogan">{SITE.slogan}</p>
		</div>
		<p class="hero-intro">
			Une association dédiée à la prévention en santé mentale, pour les étudiants et jeunes actifs.
		</p>
		<div class="hero-cta">
			<Button href="/contact" variant="primary">Nous contacter</Button>
			<Button href={CONTACT.instagramUrl} variant="secondary" external>Instagram</Button>
		</div>
	</div>
</Section>

<Section variant="light">
	<h2>Présentation</h2>
	<p>
		{SITE.name} est une association qui œuvre pour la prévention en santé mentale auprès des étudiants
		et des jeunes actifs. Notre mission : intégrer l'hygiène mentale au cœur du quotidien, comme on entretient
		sa santé physique.
	</p>
	<h3>Le concept d'hygiène mentale</h3>
	<p>
		La santé mentale ne se limite pas aux situations de crise. Elle se préserve, se cultive et
		s'accompagne au quotidien.
		{SITE.name} propose des actions accessibles, identifiables et déstigmatisées pour maintenir son bien-être
		mental.
	</p>
</Section>

<Section variant="accent">
	<h2>Notre positionnement</h2>
	<p class="positionnement-intro">
		{SITE.name} agit en amont, en complémentarité avec les dispositifs existants :
	</p>
	<div class="pillars-grid">
		<div class="pillar-card">
			<h3>Maintenance à long terme</h3>
			<p class="pillar-desc">
				La santé mentale se préserve au quotidien, pas seulement en situation d'urgence.
			</p>
		</div>
		<div class="pillar-card">
			<h3>Déstigmatisation</h3>
			<p class="pillar-desc">
				Rendre la santé mentale compréhensible et abordable pour les étudiants et jeunes actifs.
			</p>
		</div>
		<div class="pillar-card">
			<h3>Accessibilité</h3>
			<p class="pillar-desc">
				Des ateliers collectifs, structurés et réguliers, intégrés au quotidien.
			</p>
		</div>
	</div>
	<a href={resolve('/association')} class="link-arrow">Découvrir l'association →</a>
</Section>

<style>
	.hero {
		max-width: 40rem;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: var(--space-2xl) 0;
		min-height: 60vh;
		justify-content: center;
		gap: var(--space-xl);
	}

	.hero-brand {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
	}

	.hero-logo {
		margin: 0;
	}

	.hero-title {
		font-size: 2.5rem;
		margin: 0;
		line-height: 1.2;
	}

	.hero-title em {
		font-style: italic;
		font-weight: 500;
	}

	.hero-slogan {
		font-size: 1.25rem;
		color: var(--color-violet-lavande);
		font-weight: 500;
		margin: 0;
	}

	.hero-intro {
		font-size: 1.1rem;
		line-height: 1.7;
		margin: 0;
		max-width: 32rem;
		opacity: 0.95;
	}

	.hero-cta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-md);
		justify-content: center;
		margin-top: var(--space-sm);
	}

	.positionnement-intro {
		margin-bottom: var(--space-2xl);
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-xl);
		margin-bottom: var(--space-2xl);
	}

	.pillar-card {
		padding: var(--space-xl);
		background: var(--color-overlay-06);
		border-radius: 8px;
		border: 1px solid var(--color-overlay-12);
	}

	.pillar-card h3 {
		margin: 0 0 var(--space-md);
		font-size: 1.125rem;
		color: var(--color-violet-lavande);
	}

	.pillar-desc {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.pillars-grid {
			grid-template-columns: 1fr;
		}
	}

	.link-arrow {
		display: inline-block;
		font-weight: 500;
	}

	@media (max-width: 640px) {
		.hero {
			min-height: 50vh;
			padding: var(--space-xl) 0;
			gap: var(--space-lg);
		}

		.hero-title {
			font-size: 1.75rem;
		}

		.hero-slogan {
			font-size: 1.1rem;
		}

		.hero-intro {
			font-size: 1rem;
		}

		.hero-cta {
			flex-direction: column;
			align-items: center;
			width: 100%;
		}

		.hero-cta :global(a) {
			width: 100%;
			justify-content: center;
		}
	}
</style>
