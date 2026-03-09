/**
 * Configuration centralisée - source unique de vérité (DRY)
 */

export const SITE = {
	name: 'EnsoiClub Initiative',
	nameStyled: 'EnsoiClub',
	nameSuffix: 'Initiative',
	slogan: "Normalisons l'entretien de ta santé mentale",
	baseUrlFallback: 'https://ensoiclub-initiative.github.io/website'
} as const;

export const LEGAL = {
	cnilUrl: 'https://www.cnil.fr'
} as const;

export const VOLUNTEER_POLES = [
	'Santé / Contenu',
	'Communication / Marketing',
	'Droit / Structuration',
	'Évaluation / Impact'
] as const;

export const VOLUNTEER_DUREES = [
	'Quelques semaines',
	'2-3 mois',
	'4-6 mois',
	'+ 6 mois',
	'A définir ensemble'
] as const;

export const FORM = {
	placeholderResponse: 'Votre réponse',
	placeholderEmail: 'votre@email.fr',
	placeholderName: 'Votre nom',
	placeholderMessage: 'Votre message...',
	consentVolunteer:
		"J'accepte que mes données soient utilisées pour traiter ma candidature (RGPD).",
	consentContact: "J'accepte que mes données soient utilisées pour me recontacter (RGPD)."
} as const;

export const CONTACT = {
	email: 'contact@ensoiclubinitiative.fr',
	emailCandidature: 'direction@ensoiclub.fr',
	instagramUrl: 'https://instagram.com/ensoiclubinitiative',
	linkedinUrl: 'https://www.linkedin.com/company/ensoiclub/'
} as const;

export const NAV_ITEMS = [
	{ href: '/', label: 'Accueil' },
	{ href: '/association', label: "L'association" },
	{ href: '/valorisation', label: 'Valorisation' },
	{ href: '/candidature', label: 'Candidature' },
	{ href: '/contact', label: 'Contact' }
] as const;

export const LEGAL_LINKS = [
	{ href: '/mentions-legales', label: 'Mentions légales' },
	{ href: '/politique-confidentialite', label: 'Politique de confidentialité' },
	{ href: '/rgpd', label: 'RGPD' }
] as const;

/** Routes included in sitemap (public pages) */
export const SITEMAP_ROUTES = [
	'/',
	'/association',
	'/valorisation',
	'/candidature',
	'/contact',
	'/mentions-legales',
	'/politique-confidentialite',
	'/rgpd'
] as const;
