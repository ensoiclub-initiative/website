<script lang="ts">
	import { SITE } from '$lib/config';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<PageMeta
	title="L'association"
	description="Découvrez l'histoire, la vision et les valeurs de {SITE.name} - association de prévention en santé mentale pour les étudiants."
/>

<Section id="histoire">
	<h1>L'association</h1>
	<h2>L'histoire et l'origine du projet</h2>
	<p>
		Les dispositifs de soutien en santé mentale pour les étudiants et jeunes actifs sont souvent
		méconnus, sous-utilisés ou mal identifiés. Les fragilités psychologiques émergent de plus en
		plus précocement et de manière diffuse, sans toujours correspondre à des situations de crise
		immédiate.
	</p>
	<p>
		Beaucoup de jeunes se trouvent dans un « entre-deux » : pas assez en difficulté pour une
		consultation d'urgence, mais pas assez bien pour avancer sereinement. {SITE.name} a été créée pour
		renforcer la prévention et le bien-être en amont, avant l'apparition de situations de rupture ou d'urgence.
	</p>
	<p>
		L'association propose des actions accessibles, identifiables et déstigmatisées pour combler le
		vide existant entre une situation perçue comme « normale », une fragilité grandissante souvent
		silencieuse, et l'entrée brutale dans un dispositif d'urgence.
	</p>
	<p>
		En intervenant à ce stade intermédiaire, {SITE.name} contribue à éviter les ruptures de parcours,
		favoriser une continuité de soutien et accompagner les étudiants dans une approche plus globale et
		durable de leur santé mentale.
	</p>
</Section>

<Section variant="light">
	<h2>Notre vision</h2>
	<p>
		{SITE.name} défend une vision simple et essentielle : la santé mentale doit être préservée, cultivée
		et accompagnée, bien avant l'apparition des situations de crise.
	</p>
	<p>
		L'association agit pour intégrer la prévention et le bien-être mental au cœur du quotidien des
		étudiants, dans une logique complémentaire aux dispositifs existants.
	</p>
	<p>
		À travers ses actions, {SITE.name} souhaite contribuer à des parcours plus continus, plus sains et
		plus durables, en lien avec les établissements, les institutions et les acteurs de terrain.
	</p>
</Section>

<Section variant="accent">
	<h2>Nos valeurs</h2>
	<ul class="values-list">
		<li>
			<strong>Prévention</strong> — Agir en amont, avant les situations d'urgence, pour éviter les ruptures
			de parcours.
		</li>
		<li>
			<strong>Accessibilité</strong> — Rendre la santé mentale compréhensible, identifiable et atteignable
			pour tous.
		</li>
		<li>
			<strong>Bienveillance</strong> — Créer des espaces sécurisés, respectueux et sans jugement.
		</li>
		<li>
			<strong>Éthique</strong> — S'inscrire dans un cadre responsable, transparent et respectueux des
			personnes.
		</li>
		<li>
			<strong>Impact concret</strong> — Proposer des actions utiles, mesurables et ancrées dans la réalité
			du terrain.
		</li>
	</ul>
</Section>

<Section>
	<h2>La fondatrice</h2>
	<div class="founder">
		<div class="founder-image">
			<!-- Placeholder - Photo Sandra Lenoir (CDC: Photo en fichier) -->
			<div class="founder-placeholder" aria-hidden="true">
				<span>Sandra Lenoir</span>
			</div>
		</div>
		<div class="founder-bio">
			<h3>Sandra Lenoir</h3>
			<p class="founder-title">Fondatrice d'EnsoiClub & Présidente de {SITE.name}</p>
			<p>
				Sandra Lenoir est à l'origine du projet {SITE.name}, né de la volonté de replacer la
				prévention en santé mentale au cœur du quotidien des étudiants et des jeunes actifs.
			</p>
			<p>
				Convaincue que la santé mentale ne doit pas être abordée uniquement dans l'urgence, elle
				porte une approche fondée sur la prévention, l'accessibilité et la déstigmatisation.
			</p>
			<p>
				À travers {SITE.name}, elle s'engage à construire des actions structurées, éthiques et
				adaptées aux réalités du terrain, en lien avec les établissements d'enseignement, les
				institutions et les partenaires de la santé.
			</p>
			<p>
				Son ambition est de contribuer à une approche plus globale et durable du bien-être mental,
				en amont des situations de rupture ou de crise.
			</p>
		</div>
	</div>
</Section>

<Section variant="light">
	<h2>Cadre éthique et positionnement</h2>
	<p>
		{SITE.name} intervient exclusivement dans les champs de la prévention, de l'éducation et du maintien
		en santé mentale. L'association ne propose pas de soins, de dispositifs curatifs ou d'accompagnement
		thérapeutique.
	</p>
	<p>
		Nos actions s'adressent aux personnes sans besoins spécifiques, urgences immédiates ou détresse
		particulière, en mettant l'accent sur la prévention primaire et l'accès volontaire.
	</p>
</Section>

<style>
	.values-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.values-list li {
		padding: var(--space-md) 0;
		border-bottom: 1px solid var(--color-overlay-15);
	}

	.values-list li:last-child {
		border-bottom: none;
	}

	.founder {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: var(--space-2xl);
		align-items: start;
	}

	.founder-image {
		position: sticky;
		top: calc(var(--header-height) + var(--space-lg));
	}

	.founder-placeholder {
		aspect-ratio: 3/4;
		background: var(--color-overlay-accent-15);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-heading);
		font-size: 0.9rem;
		text-align: center;
		padding: var(--space-md);
		color: var(--color-violet-lavande);
	}

	.founder-title {
		font-style: italic;
		margin-bottom: var(--space-lg);
		opacity: 0.9;
	}

	@media (max-width: 768px) {
		.founder {
			grid-template-columns: 1fr;
		}

		.founder-image {
			position: static;
		}

		.founder-placeholder {
			max-width: 16rem;
			margin: 0 auto;
		}
	}
</style>
