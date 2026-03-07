<script lang="ts">
	import { resolve } from '$app/paths';
	import { CONTACT, LEGAL_LINKS, SITE } from '$lib/config';
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="brand">
				<p class="brand-name">{SITE.nameStyled} <em>{SITE.nameSuffix}</em></p>
				<p class="slogan">{SITE.slogan}</p>
			</div>
			<div class="links">
				<div class="contact-links">
					<a href="mailto:{CONTACT.email}" class="footer-link">{CONTACT.email}</a>
					<a
						href={CONTACT.instagramUrl}
						target="_blank"
						rel="external noopener noreferrer"
						class="footer-link">Instagram</a
					>
					<a
						href={CONTACT.linkedinUrl}
						target="_blank"
						rel="external noopener noreferrer"
						class="footer-link">LinkedIn</a
					>
				</div>
				<nav class="legal-nav" aria-label="Informations légales">
					{#each LEGAL_LINKS as link (link.href)}
						<a href={resolve(link.href)} class="legal-link">{link.label}</a>
					{/each}
				</nav>
			</div>
		</div>
		<p class="copyright">© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
	</div>
</footer>

<style>
	.footer {
		background-color: var(--color-bg-primary);
		border-top: 1px solid var(--color-overlay-10);
		padding: var(--space-2xl) var(--space-lg);
	}

	.footer-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--space-xl);
		margin-bottom: var(--space-xl);
	}

	.brand-name {
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 1.125rem;
		margin-bottom: var(--space-xs);
	}

	.brand-name em {
		font-style: italic;
		font-weight: 500;
	}

	.slogan {
		font-size: 0.9rem;
		color: var(--color-violet-lavande);
		margin: 0;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.contact-links {
		display: flex;
		gap: var(--space-lg);
	}

	.footer-link {
		color: var(--color-accent);
		font-size: 0.95rem;
	}

	.legal-nav {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-md);
	}

	.legal-link {
		color: var(--color-text-primary);
		font-size: 0.875rem;
		opacity: 0.85;
	}

	.legal-link:hover {
		opacity: 1;
	}

	.copyright {
		font-size: 0.8rem;
		opacity: 0.7;
		margin: 0;
		margin-top: var(--space-lg);
	}

	@media (max-width: 640px) {
		.footer-content {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.legal-nav {
			justify-content: center;
		}
	}
</style>
