<script lang="ts">
	import { CONTACT, SITE } from '$lib/config';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<PageMeta title="Mentions légales" description="Mentions légales du site {SITE.name}." />

<Section>
	<h1>Mentions légales</h1>
	<p>
		Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004
		pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des
		utilisateurs et visiteurs du site {SITE.name} les présentes mentions légales.
	</p>

	<h2>Éditeur du site</h2>
	<p>
		<strong>{SITE.name}</strong><br />
		Association loi 1901<br />
		[Adresse du siège social à compléter]<br />
		Email : {CONTACT.email}
	</p>

	<h2>Directeur de la publication</h2>
	<p>Sandra Lenoir, Présidente de {SITE.name}</p>

	<h2>Hébergement</h2>
	<p>
		Ce site est hébergé par GitHub Pages.<br />
		GitHub, Inc.<br />
		88 Colin P Kelly Jr St<br />
		San Francisco, CA 94107<br />
		États-Unis
	</p>

	<h2>Propriété intellectuelle</h2>
	<p>
		L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la
		propriété exclusive de {SITE.name} ou de ses partenaires. Toute reproduction, distribution, modification
		ou utilisation sans autorisation préalable est interdite.
	</p>

	<h2>Limitation de responsabilité</h2>
	<p>
		{SITE.name} s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
		Toutefois, l'association ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
		mises à disposition. {SITE.name} intervient exclusivement dans le champ de la prévention en santé
		mentale et ne propose pas de soins, de dispositifs curatifs ou d'accompagnement thérapeutique.
	</p>

	<h2>Liens hypertextes</h2>
	<p>
		Le site peut contenir des liens vers d'autres sites. {SITE.name} n'exerce aucun contrôle sur ces sites
		et décline toute responsabilité quant à leur contenu.
	</p>
</Section>
