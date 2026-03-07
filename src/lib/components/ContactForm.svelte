<script lang="ts">
	import { CONTACT } from '$lib/config';
	import { buildMailtoContact } from '$lib/formSubmit';

	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		if (!form) return;

		const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
		const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
		const subject = (form.elements.namedItem('subject') as HTMLSelectElement)?.value || '';
		const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';
		const mailto = buildMailtoContact(
			CONTACT.email,
			`[${subject}] ${name}`,
			`${message}\n\n---\nDe: ${name} <${email}>`
		);
		window.location.href = mailto;
		submitted = true;
	}
</script>

{#if submitted}
	<div class="success-message" role="alert">
		<p>Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.</p>
	</div>
{:else}
	<form
		class="form-base contact-form"
		method="post"
		action="#"
		onsubmit={handleSubmit}
	>
		<div class="form-group">
			<label for="name">Nom</label>
			<input type="text" id="name" name="name" required placeholder="Votre nom" />
		</div>

		<div class="form-group">
			<label for="email">Email</label>
			<input type="email" id="email" name="email" required placeholder="votre@email.fr" />
		</div>

		<div class="form-group">
			<label for="subject">Sujet</label>
			<select id="subject" name="subject" required>
				<option value="">Choisir...</option>
				<option value="information">Demande d'information</option>
				<option value="partenariat">Partenariat</option>
				<option value="collaboration">Collaboration</option>
				<option value="autre">Autre</option>
			</select>
		</div>

		<div class="form-group">
			<label for="message">Message</label>
			<textarea id="message" name="message" rows="5" required placeholder="Votre message..."
			></textarea>
		</div>

		<div class="form-group consent">
			<label class="checkbox-label">
				<input type="checkbox" name="consent" required />
				J'accepte que mes données soient utilisées pour me recontacter (RGPD).
			</label>
		</div>

		<button type="submit" class="submit-btn">Envoyer</button>
	</form>
{/if}

<style>
	.contact-form {
		max-width: 32rem;
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}
</style>
