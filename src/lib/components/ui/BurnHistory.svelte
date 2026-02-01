<script lang="ts">
	import { fly } from 'svelte/transition';

	const history = [
		{ id: 1, amount: '45,230', type: 'Redemption Burn', date: '2h ago', status: 'Finalized' },
		{ id: 2, amount: '12,000', type: 'Policy Adjustment', date: '5h ago', status: 'Finalized' },
		{ id: 3, amount: '89,400', type: 'Redemption Burn', date: '12h ago', status: 'Finalized' },
		{ id: 4, amount: '2,500', type: 'Admin Incineration', date: '1d ago', status: 'Finalized' }
	];
</script>

<div
	class="glass relative overflow-hidden rounded-3xl border border-white/10 p-4 shadow-xl backdrop-blur-2xl sm:p-6"
>
	<!-- subtle ambient glow (lighter for mobile) -->
	<div
		class="pointer-events-none absolute -top-24 -left-24 h-64 w-64 bg-blue-500/6 blur-[90px]"
	></div>

	<!-- Header -->
	<header class="mb-4 flex items-center justify-between">
		<div class="flex items-center gap-2">
			<span class="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(59,130,246,0.8)]"
			></span>
			<h3 class="text-[10px] font-black tracking-[0.35em] text-white/50 uppercase">Burn Ledger</h3>
		</div>

		<span
			class="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[8px] font-black tracking-widest text-blue-400 uppercase"
		>
			On-Chain
		</span>
	</header>

	<!-- Ledger items -->
	<div class="space-y-2">
		{#each history as event, i}
			<div
				in:fly={{ x: -10, delay: i * 80, duration: 500 }}
				class="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/2 px-3 py-3 transition-all hover:border-blue-400/30 hover:bg-white/4"
			>
				<!-- Left -->
				<div class="flex min-w-0 flex-col">
					<span class="truncate text-[11px] font-black tracking-tight text-white/85 uppercase">
						{event.type}
					</span>
					<span class="mt-0.5 text-[9px] font-bold tracking-widest text-white/30 uppercase">
						{event.date} • {event.status}
					</span>
				</div>

				<!-- Right -->
				<div class="flex items-baseline gap-1.5 pl-3">
					<span
						class="text-lg font-black tracking-tight text-white transition-colors group-hover:text-blue-400"
					>
						-{event.amount}
					</span>
					<span class="text-[9px] font-black tracking-widest text-blue-400/50 uppercase"> PX </span>
				</div>
			</div>
		{/each}
	</div>

	<!-- Footer -->
	<footer class="mt-4 flex justify-center border-t border-white/5 pt-3">
		<button
			class="text-[9px] font-black tracking-[0.35em] text-white/30 uppercase transition-colors hover:text-white"
		>
			Download Ledger
		</button>
	</footer>
</div>

<style>
	.glass {
		background: rgba(255, 255, 255, 0.025);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
	}
</style>
