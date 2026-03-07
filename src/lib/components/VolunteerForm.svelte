<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import { browser } from '$app/environment';
	import { CONTACT, FORM, VOLUNTEER_DUREES, VOLUNTEER_POLES } from '$lib/config';
	import { getFormSubmitUrl } from '$lib/formSubmit';
	import { getSiteBaseUrlOptional } from '$lib/url';
	import { validateFileSize } from '$lib/validation';

	const SUCCESS_URL = $derived(
		`${getSiteBaseUrlOptional() || (browser ? $page.url.origin : '')}${resolve('/candidature')}?sent=1`
	);

	let submitted = $state(false);

	$effect(() => {
		if (browser && $page.url.searchParams.get('sent') === '1') {
			submitted = true;
		}
	});
	let fileError = $state('');
	let validationError = $state('');

	function handleFileChange(file: File | null): void {
		const result = validateFileSize(file);
		fileError = result.valid ? '' : result.error;
	}

	function handleSubmit(e: SubmitEvent) {
		const form = e.target as HTMLFormElement;
		if (!form) return;

		validationError = '';
		const poles = form.querySelectorAll<HTMLInputElement>('input[name="pole"]:checked');
		const durees = form.querySelectorAll<HTMLInputElement>('input[name="duree"]:checked');
		if (poles.length === 0 || durees.length === 0) {
			e.preventDefault();
			validationError = 'Veuillez sélectionner au moins une option pour chaque question.';
			return;
		}

		const cvInput = form.elements.namedItem('cv') as HTMLInputElement;
		const fileResult = validateFileSize(cvInput?.files?.[0] ?? null);
		if (!fileResult.valid) {
			e.preventDefault();
			fileError = fileResult.error;
			return;
		}
		// Si validation OK, on laisse le formulaire se soumettre normalement vers FormSubmit.co
	}
</script>

{#if submitted}
	<div class="success-message" role="alert">
		<p>Merci pour ta candidature ! Nous te recontacterons rapidement.</p>
	</div>
{:else}
	<form
		class="form-base volunteer-form"
		method="POST"
		action={getFormSubmitUrl()}
		enctype="multipart/form-data"
		onsubmit={handleSubmit}
	>
		<input type="hidden" name="_subject" value="Nouvelle candidature bénévole" />
		<input type="hidden" name="_next" value={SUCCESS_URL} />
		<input type="hidden" name="_captcha" value="false" />
		{#if validationError}
			<p class="error-message">{validationError}</p>
		{/if}

		<div class="form-group">
			<label for="nom">Prénom / Nom <span class="required">*</span></label>
			<input type="text" id="nom" name="nom" required placeholder={FORM.placeholderResponse} />
		</div>

		<div class="form-group">
			<label for="email">Email <span class="required">*</span></label>
			<input type="email" id="email" name="_replyto" required placeholder={FORM.placeholderEmail} />
		</div>

		<div class="form-group">
			<label for="age">Age <span class="required">*</span></label>
			<input type="text" id="age" name="age" required placeholder={FORM.placeholderResponse} />
		</div>

		<div class="form-group">
			<label for="formation">Formation / études actuelles <span class="required">*</span></label>
			<input type="text" id="formation" name="formation" required placeholder={FORM.placeholderResponse} />
		</div>

		<div class="form-group">
			<fieldset>
				<legend>Pôle qui t'intéresse <span class="required">*</span></legend>
				<div class="checkbox-group">
					{#each VOLUNTEER_POLES as pole (pole)}
						<label class="checkbox-label">
							<input type="checkbox" name="pole" value={pole} />
							{pole}
						</label>
					{/each}
				</div>
			</fieldset>
		</div>

		<div class="form-group">
			<label for="disponibilites"
				>Disponibilités approximatives <span class="required">*</span></label
			>
			<input
				type="text"
				id="disponibilites"
				name="disponibilites"
				required
				placeholder={FORM.placeholderResponse}
			/>
		</div>

		<div class="form-group">
			<fieldset>
				<legend
					>Durée d'engagement souhaitée (à titre informatif) <span class="required">*</span></legend
				>
				<div class="checkbox-group">
					{#each VOLUNTEER_DUREES as duree (duree)}
						<label class="checkbox-label">
							<input type="checkbox" name="duree" value={duree} />
							{duree}
						</label>
					{/each}
				</div>
			</fieldset>
		</div>

		<div class="form-group">
			<label for="cv">CV <span class="required">*</span></label>
			<input
				type="file"
				id="cv"
				name="cv"
				required
				accept=".pdf,.doc,.docx"
				onchange={(e) => handleFileChange((e.target as HTMLInputElement).files?.[0] ?? null)}
			/>
			<p class="form-hint">Importez 1 fichier compatible. 10 Mo max. (PDF, DOC, DOCX)</p>
			{#if fileError}
				<p class="error-message">{fileError}</p>
			{/if}
		</div>

		<div class="form-group consent">
			<label class="checkbox-label">
				<input type="checkbox" name="consent" required />
				{FORM.consentVolunteer}
			</label>
		</div>

		<button type="submit" class="submit-btn">Envoyer</button>
	</form>
{/if}

<style>
	.volunteer-form {
		max-width: 36rem;
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}
</style>
