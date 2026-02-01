<script lang="ts">
	import '../app.css';

	/**
	 * Pera-X Root Orchestrator: Ver. 2026.01.V
	 * Consolidated technical foundation.
	 */

	// Svelte 5 Props: High-fidelity data flow
	let { children } = $props();
</script>

<div class="relative min-h-screen w-full overflow-x-hidden bg-transparent selection:bg-sky-500/30">
	{@render children()}
</div>

<style>
	/* INSTITUTIONAL TRANSPARENCY OVERRIDE */
	:global(html),
	:global(body) {
		background-color: transparent !important;
		margin: 0;
		padding: 0;
		color-scheme: dark;
		overscroll-behavior: none;
	}

	/* SVELTEKIT CONTAINER NORMALIZATION */
	:global(#svelte) {
		background: transparent !important;
		display: contents;
	}

	/* Prevents horizontal scroll from large typography */
	:global(main) {
		overflow-x: hidden;
	}
</style>
