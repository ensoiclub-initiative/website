<script lang="ts">
	import { SITE } from '$lib/config';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Section from '$lib/components/Section.svelte';
	import Logo from '$lib/components/Logo.svelte';
</script>

<PageMeta
	title="Valorisation"
	description="Découvrez le parcours de valorisation de {SITE.name}, ses accompagnements et son écosystème de partenaires."
/>

<Section>
	<h1>Valorisation du projet</h1>
	<p>
		{SITE.name} s'inscrit dans une dynamique de structuration progressive et de reconnaissance institutionnelle.
		Le projet bénéficie d'un accompagnement et d'un intérêt croissant de la part d'acteurs engagés dans
		les domaines de la santé, de l'enseignement et de l'innovation sociale.
	</p>
	<p>Cette phase de valorisation vise à :</p>
	<ul>
		<li>renforcer la crédibilité du projet,</li>
		<li>sécuriser son développement,</li>
		<li>
			et soutenir le déploiement d'actions de prévention en santé mentale sur les territoires.
		</li>
	</ul>
</Section>

<Section variant="light">
	<h2>Parcours et reconnaissance</h2>
	<div class="logo-section">
		<div class="ensoiclub-logo">
			<Logo size={120} variant="light" />
			<p>{SITE.name}</p>
		</div>
		<p class="incubation-note">
			Logos des lauréats d'incubation et structures partenaires à intégrer ici.
		</p>
	</div>
</Section>

<Section variant="accent">
	<h2>Accompagnements & écosystème</h2>
	<p>
		{SITE.name} évolue au sein d'un écosystème d'acteurs engagés, favorisant la réflexion, l'expérimentation
		et la structuration du projet.
	</p>
	<p>Cette mise en réseau permet :</p>
	<ul>
		<li>un regard croisé sur les enjeux de santé mentale,</li>
		<li>un appui méthodologique,</li>
		<li>et une montée en qualité des actions proposées.</li>
	</ul>
	<div class="card card--muted partners-placeholder">
		<p>Logos et noms des structures partenaires pourront être intégrés ici.</p>
	</div>
</Section>

<Section>
	<h2>Nos actions</h2>
	<div class="actions-grid">
		<div class="card card--muted action-card">
			<h3>Une approche complémentaire</h3>
			<p>
				Les actions de {SITE.name} ne se substituent pas aux dispositifs existants. Elles s'inscrivent
				comme un maillon intermédiaire, entre le bien-être du quotidien et les prises en charge spécialisées.
			</p>
		</div>
		<div class="card card--muted action-card">
			<h3>Ateliers de prévention & hygiène mentale</h3>
			<p>
				Des ateliers collectifs, accessibles et encadrés pour sensibiliser à la santé mentale,
				identifier les signaux de fragilité et développer des outils concrets de bien-être au
				quotidien.
			</p>
		</div>
		<div class="card card--muted action-card">
			<h3>Projet pilote - Expérimentation territoriale</h3>
			<p>
				{SITE.name} développe actuellement un projet pilote, pionnier sur le territoire, dédié à l'expérimentation
				d'actions de prévention en santé mentale, en lien avec les besoins réels des étudiants et des
				acteurs locaux.
			</p>
		</div>
	</div>
</Section>

<style>
	.logo-section {
		text-align: center;
		padding: var(--space-xl) 0;
	}

	.ensoiclub-logo {
		margin-bottom: var(--space-2xl);
	}

	.ensoiclub-logo p {
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 1.25rem;
		margin: 0;
	}

	.incubation-note {
		font-style: italic;
		opacity: 0.8;
	}

	.partners-placeholder {
		margin-top: var(--space-2xl);
		text-align: center;
	}

	.actions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-xl);
		margin-top: var(--space-xl);
	}

	.action-card {
		padding: var(--space-lg);
	}

	.action-card h3 {
		margin-top: 0;
		font-size: 1.125rem;
		color: var(--color-violet-lavande);
	}
</style>
