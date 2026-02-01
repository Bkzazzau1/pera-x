<script lang="ts">
	import ProtocolHeader from '$lib/components/ui/ProtocolHeader.svelte';
	import '../app.css';
</script>

<div class="relative min-h-screen w-full overflow-x-hidden bg-transparent selection:bg-sky-500/30">
	<!-- ✅ Global header for ALL routes (marketing + app) -->
	<ProtocolHeader />

	<!-- ✅ page content -->
	<main class="relative z-0">
		<slot />
	</main>
</div>

<style>
	:global(html),
	:global(body) {
		background-color: transparent !important;
		margin: 0;
		padding: 0;
		color-scheme: dark;
		overscroll-behavior: none;
	}

	:global(#svelte) {
		background: transparent !important;
		display: contents;
	}

	:global(main) {
		overflow-x: hidden;
	}
</style>
