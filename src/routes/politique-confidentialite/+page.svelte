<script lang="ts">
	import { CONTACT, SITE } from '$lib/config';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<PageMeta
	title="Politique de confidentialité"
	description="Politique de confidentialité du site {SITE.name}."
/>

<Section>
	<h1>Politique de confidentialité</h1>
	<p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

	<h2>Introduction</h2>
	<p>
		{SITE.name} s'engage à protéger la vie privée des utilisateurs de son site internet. Cette politique
		de confidentialité décrit comment nous collectons, utilisons et protégeons vos données personnelles.
	</p>

	<h2>Données collectées</h2>
	<p>
		Lorsque vous utilisez notre formulaire de contact, nous collectons les données que vous nous
		fournissez :
	</p>
	<ul>
		<li>Nom</li>
		<li>Adresse email</li>
		<li>Sujet de votre message</li>
		<li>Contenu de votre message</li>
	</ul>
	<p>
		Ces données sont collectées uniquement avec votre consentement explicite (case à cocher RGPD).
	</p>

	<h2>Finalité du traitement</h2>
	<p>Les données collectées sont utilisées exclusivement pour :</p>
	<ul>
		<li>Répondre à vos demandes d'information</li>
		<li>Traiter les demandes de partenariat ou de collaboration</li>
		<li>Vous recontacter dans le cadre de votre demande</li>
	</ul>

	<h2>Durée de conservation</h2>
	<p>
		Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, et au
		maximum 3 ans à compter du dernier contact, sauf obligation légale de conservation plus longue.
	</p>

	<h2>Destinataires des données</h2>
	<p>
		Les données collectées sont destinées uniquement aux personnes habilitées de l'association
		{SITE.name} pour le traitement des demandes de contact. Elles ne sont ni vendues ni cédées à des tiers.
	</p>

	<h2>Vos droits</h2>
	<p>
		Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits
		suivants :
	</p>
	<ul>
		<li>Droit d'accès à vos données</li>
		<li>Droit de rectification</li>
		<li>Droit à l'effacement</li>
		<li>Droit à la limitation du traitement</li>
		<li>Droit à la portabilité</li>
		<li>Droit d'opposition</li>
	</ul>
	<p>
		Pour exercer ces droits, contactez-nous à : <a href="mailto:{CONTACT.email}">{CONTACT.email}</a
		>. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).
	</p>

	<h2>Cookies</h2>
	<p>
		Ce site n'utilise pas de cookies de traçage. Seuls des cookies techniques strictement
		nécessaires au bon fonctionnement du site peuvent être utilisés.
	</p>

	<h2>Modifications</h2>
	<p>
		{SITE.name} se réserve le droit de modifier cette politique de confidentialité à tout moment. Les
		modifications seront publiées sur cette page avec la date de mise à jour.
	</p>
</Section>
