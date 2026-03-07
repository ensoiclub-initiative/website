/**
 * Configuration centralisée - source unique de vérité (DRY)
 */

export const SITE = {
	name: 'EnsoiClub Initiative',
	nameStyled: 'EnsoiClub',
	nameSuffix: 'Initiative',
	slogan: "Normalisons l'entretien de ta santé mentale"
} as const;

export const CONTACT = {
	email: 'contact@ensoiclubinitiative.fr',
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
