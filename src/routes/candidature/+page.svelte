<script lang="ts">
	import { SITE } from '$lib/config';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Section from '$lib/components/Section.svelte';
	import VolunteerForm from '$lib/components/VolunteerForm.svelte';
</script>

<PageMeta
	title="Candidature bénévole"
	description="Rejoignez {SITE.name} en tant que bénévole - formulaire de candidature pour contribuer à la prévention en santé mentale."
/>

<Section>
	<h1>Candidature bénévole</h1>
	<p class="intro">
		Tu souhaites t'engager à nos côtés pour la prévention en santé mentale ? Remplis ce formulaire
		pour nous permettre de mieux comprendre ton profil et tes disponibilités.
	</p>
	<VolunteerForm />
</Section>
