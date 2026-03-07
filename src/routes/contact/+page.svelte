<script lang="ts">
	import { resolve } from '$app/paths';
	import { CONTACT, SITE } from '$lib/config';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<PageMeta
	title="Contact"
	description="Contactez {SITE.name} - formulaire de contact, email, partenariat, devenir bénévole."
/>

<Section>
	<h1>Contact</h1>
	<p class="intro">
		Vous souhaitez en savoir plus sur {SITE.name}, échanger autour d'un partenariat ou découvrir nos
		actions de prévention en santé mentale ? Nous serons ravis d'échanger avec vous.
	</p>

	<div class="volunteer-section">
		<h2>Devenir bénévole</h2>
		<p>
			Vous souhaitez vous engager à nos côtés ?
			<a href={resolve('/candidature')}>Remplir le formulaire de candidature bénévole</a>
		</p>
	</div>

	<div class="contact-grid">
		<div class="contact-methods">
			<h2>Nous contacter</h2>
			<div class="contact-item">
				<span class="contact-label">Adresse email</span>
				<a href="mailto:{CONTACT.email}">{CONTACT.email}</a>
			</div>
			<div class="contact-item">
				<span class="contact-label">Réseaux sociaux</span>
				<a href={CONTACT.instagramUrl} target="_blank" rel="external noopener noreferrer"
					>Suivez {SITE.name} sur Instagram</a
				>
				<p class="contact-desc">Découvrez nos actualités et actions.</p>
			</div>
		</div>
		<div class="form-section">
			<h2>Formulaire de contact</h2>
			<p class="form-desc">
				Un formulaire simple pour toute demande d'information, de partenariat ou de collaboration.
			</p>
			<ContactForm />
		</div>
	</div>
</Section>

<style>
	.volunteer-section {
		margin-bottom: var(--space-2xl);
		padding: var(--space-lg);
		background: var(--color-overlay-accent-08);
		border-radius: 8px;
	}

	.volunteer-section h2 {
		margin-top: 0;
		font-size: 1.25rem;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-2xl);
		align-items: start;
	}

	.contact-methods h2,
	.form-section h2 {
		margin-top: 0;
		font-size: 1.25rem;
	}

	.contact-item {
		margin-bottom: var(--space-xl);
	}

	.contact-label {
		display: block;
		font-family: var(--font-heading);
		font-weight: 500;
		font-size: 0.9rem;
		margin-bottom: var(--space-xs);
		opacity: 0.9;
	}

	.contact-desc,
	.form-desc {
		font-size: 0.9rem;
		opacity: 0.85;
		margin: var(--space-xs) 0 0;
	}

	@media (max-width: 768px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
