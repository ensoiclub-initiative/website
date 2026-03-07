/**
 * Shared validation logic (SRP)
 */

export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

export type ValidationResult = { valid: true } | { valid: false; error: string };

export function validateFileSize(file: File | null): ValidationResult {
	if (!file) return { valid: true };
	if (file.size > MAX_FILE_SIZE_BYTES) {
		return { valid: false, error: 'Le fichier ne doit pas dépasser 10 Mo.' };
	}
	return { valid: true };
}

export function validateVolunteerForm(form: HTMLFormElement): ValidationResult {
	const poles = form.querySelectorAll<HTMLInputElement>('input[name="pole"]:checked');
	const durees = form.querySelectorAll<HTMLInputElement>('input[name="duree"]:checked');
	if (poles.length === 0 || durees.length === 0) {
		return {
			valid: false,
			error: 'Veuillez sélectionner au moins une option pour chaque question.'
		};
	}
	return { valid: true };
}
