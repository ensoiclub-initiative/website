/**
 * Shared validation logic (SRP)
 */

export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

export type FileValidationResult = { valid: true } | { valid: false; error: string };

export function validateFileSize(file: File | null): FileValidationResult {
	if (!file) return { valid: true };
	if (file.size > MAX_FILE_SIZE_BYTES) {
		return { valid: false, error: 'Le fichier ne doit pas dépasser 10 Mo.' };
	}
	return { valid: true };
}
