<script lang="ts">
	import { CONTACT, SITE } from '$lib/config';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<PageMeta
	title="RGPD"
	description="Informations relatives au RGPD et à la protection des données personnelles - {SITE.name}."
/>

<Section>
	<h1>Protection des données personnelles (RGPD)</h1>

	<h2>Responsable du traitement</h2>
	<p>
		Les données personnelles collectées sur ce site sont traitées par :<br />
		<strong>{SITE.name}</strong><br />
		Association loi 1901<br />
		Email : {CONTACT.email}
	</p>

	<h2>Base légale du traitement</h2>
	<p>
		Le traitement de vos données personnelles via le formulaire de contact est fondé sur votre
		consentement (article 6.1.a du RGPD). Vous pouvez retirer ce consentement à tout moment en nous
		contactant.
	</p>

	<h2>Données traitées</h2>
	<p>Nous collectons uniquement les données que vous nous communiquez volontairement :</p>
	<ul>
		<li>Identité : nom</li>
		<li>Coordonnées : adresse email</li>
		<li>Contenu de votre message</li>
	</ul>

	<h2>Vos droits</h2>
	<p>
		Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi « Informatique et Libertés » du 6
		janvier 1978 modifiée, vous disposez des droits suivants :
	</p>
	<ul>
		<li>
			<strong>Droit d'accès</strong> : obtenir la confirmation que des données vous concernant sont traitées
			et y accéder
		</li>
		<li>
			<strong>Droit de rectification</strong> : faire corriger des données inexactes ou incomplètes
		</li>
		<li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
		<li>
			<strong>Droit à la limitation</strong> : demander la limitation du traitement dans certains cas
		</li>
		<li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
		<li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
	</ul>
	<p>
		Pour exercer ces droits, adressez votre demande à : <a href="mailto:{CONTACT.email}"
			>{CONTACT.email}</a
		>. Nous nous engageons à répondre dans un délai d'un mois.
	</p>

	<h2>Réclamation</h2>
	<p>
		Si vous estimez que le traitement de vos données personnelles constitue une violation du
		règlement, vous avez le droit d'introduire une réclamation auprès de la CNIL :<br />
		<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
	</p>

	<h2>Sécurité</h2>
	<p>
		{SITE.name} met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
		données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
	</p>
</Section>
