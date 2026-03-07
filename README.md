# EnsoiClub Initiative - Site vitrine

Site vitrine institutionnel pour l'association EnsoiClub Initiative, conforme au CDC.

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview  # Prévisualiser le build
```

## Configuration

### Formulaire de contact

Le formulaire ouvre le client mail par défaut (mailto). Aucune configuration requise.

### Formulaire candidature

Définir `PUBLIC_SITE_URL` pour la redirection après envoi (ex: `https://username.github.io/website`)

### Formulaire de candidature bénévole

Utilise [FormSubmit.co](https://formsubmit.co) — aucune configuration requise. L'envoi se fait vers `contact@ensoiclubinitiative.fr` (voir `config.ts`). **Premier envoi** : FormSubmit enverra un email de confirmation à cette adresse ; il faut cliquer sur le lien pour activer le formulaire.

### Base path (GitHub Pages)

Si le site est déployé dans un sous-dossier (ex: `ensoiclub-initiative.github.io/website/`), définir `BASE_PATH=/website` lors du build.

## Structure

- `src/lib/components/` — Header, Footer, Logo, Section, ContactForm
- `src/lib/styles/` — Variables CSS, styles globaux
- `src/routes/` — Pages (Accueil, Association, Valorisation, Contact, pages légales)

## Assets à fournir

- Logo EnsoiClub (SVG) — remplacer le placeholder dans `Logo.svelte`
- Photo Sandra Lenoir — page Association
- Logos lauréats incubation — page Valorisation
