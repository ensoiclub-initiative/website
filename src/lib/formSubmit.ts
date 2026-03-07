/**
 * Mailto contact form helper
 */

export function buildMailtoContact(email: string, subject: string, body: string): string {
	return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
