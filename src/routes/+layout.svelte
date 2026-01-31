<script lang="ts">
	import '../app.css';
</script>

<div class="relative min-h-screen w-full overflow-x-hidden bg-transparent">
	<slot />
</div>

<style>
	/* Emergency CSS Override: 
       Ensures that no default browser styles or SvelteKit wrappers 
       block the visibility of the fixed PlanetScene.
    */
	:global(html),
	:global(body) {
		background-color: transparent !important;
		margin: 0;
		padding: 0;
		color-scheme: dark;
	}

	:global(#svelte) {
		background: transparent !important;
	}
</style>
