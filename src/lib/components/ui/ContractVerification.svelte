<script lang="ts">
	const contractFacts = [
		{
			label: 'Program',
			value: 'perax_core',
			status: 'Anchor Core'
		},
		{
			label: 'Program ID',
			value: 'FqEiSx5vujh2vi3yk12NaZMXhjMSaKovGUuzcKiAgshn',
			status: 'Devnet Configured'
		},
		{
			label: 'Cluster',
			value: 'Solana Devnet',
			status: 'Testing Layer'
		},
		{
			label: 'Token Supply',
			value: '1,000,000,000 PEX',
			status: 'Fixed Policy'
		}
	] as const;

	const controls = [
		'Utility payment transfer to Trading Company accounts',
		'External utility-payment record support',
		'Trading Company burn execution',
		'Market-conditional release policy',
		'Pause and emergency-pause controls',
		'Two-step authority transfer controls'
	] as const;
</script>

<section class="glass glow-hover relative overflow-hidden rounded-3xl border border-cyan-400/10 p-5 shadow-2xl backdrop-blur-3xl sm:p-6 md:rounded-[3.5rem] md:p-10">
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-cyan-400/12 blur-[90px]"></div>
		<div class="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-blue-600/12 blur-[100px]"></div>
		<div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/30 to-transparent"></div>
	</div>

	<div class="relative z-10">
		<div class="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
			<div>
				<div class="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[8px] font-black tracking-[0.38em] text-cyan-300 uppercase">
					Contract Verification
				</div>
				<h2 class="text-3xl leading-none font-black tracking-tighter text-white uppercase italic sm:text-4xl md:text-5xl">
					Verified Protocol Layer
				</h2>
				<p class="mt-3 max-w-2xl text-sm leading-relaxed text-white/40">
					The dApp should make the contract layer visible before investors or users interact with token utility. These cards summarize the current Anchor program and policy controls.
				</p>
			</div>

			<div class="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-4 text-left lg:text-right">
				<div class="text-[8px] font-black tracking-[0.32em] text-emerald-300 uppercase">Readiness</div>
				<div class="mt-1 text-xl font-black text-white uppercase italic">Devnet Verified</div>
				<div class="mt-1 text-[10px] font-bold tracking-widest text-white/35 uppercase">Mainnet pending</div>
			</div>
		</div>

		<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
			{#each contractFacts as fact (fact.label)}
				<div class="rounded-3xl border border-white/5 bg-white/3 p-5 transition hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/5">
					<div class="mb-3 flex items-center justify-between gap-3">
						<span class="text-[8px] font-black tracking-[0.32em] text-white/25 uppercase">{fact.label}</span>
						<span class="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-2 py-1 text-[7px] font-black tracking-widest text-cyan-300 uppercase">{fact.status}</span>
					</div>
					<div class="break-all text-sm font-black text-white sm:text-base">{fact.value}</div>
				</div>
			{/each}
		</div>

		<div class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
			<div class="rounded-3xl border border-white/5 bg-black/20 p-6">
				<div class="mb-5 text-[9px] font-black tracking-[0.4em] text-white/25 uppercase">Contract Control Surface</div>
				<div class="grid gap-3 md:grid-cols-2">
					{#each controls as control}
						<div class="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/3 p-4">
							<div class="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.85)]"></div>
							<p class="text-xs leading-relaxed font-bold text-white/45 uppercase tracking-wider">{control}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="rounded-3xl border border-amber-400/20 bg-amber-400/8 p-6">
				<div class="text-[9px] font-black tracking-[0.4em] text-amber-300 uppercase">Investor Note</div>
				<p class="mt-4 text-sm leading-relaxed text-white/45">
					The current dApp should label Devnet clearly until token mint, production wallets, allocation transfers, and mainnet deployment are completed.
				</p>
				<div class="mt-6 rounded-2xl border border-white/5 bg-black/20 p-4 text-[10px] font-black tracking-widest text-white/35 uppercase">
					Do not present simulated dashboard numbers as live mainnet data.
				</div>
			</div>
		</div>
	</div>
</section>
