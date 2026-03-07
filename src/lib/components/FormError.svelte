<script lang="ts">
	interface Props {
		variant: 'contact' | 'generic';
		email: string;
	}

	let { variant, email }: Props = $props();
</script>

<p class="error-message">
	{#if variant === 'contact'}
		Une erreur s'est produite. Vous pouvez nous contacter directement à
	{:else}
		Une erreur s'est produite. Contactez-nous à
	{/if}
	<a href="mailto:{email}">{email}</a>.
</p>
