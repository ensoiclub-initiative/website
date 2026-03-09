/**
 * Form submission helpers (mailto, FormSubmit.co)
 */

import { CONTACT } from '$lib/config';

export function buildMailtoContact(email: string, subject: string, body: string): string {
	return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getFormSubmitCandidatureUrl(): string {
	return `https://formsubmit.co/${CONTACT.emailCandidature}`;
}
