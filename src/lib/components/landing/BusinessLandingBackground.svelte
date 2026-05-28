<script lang="ts">
	const nodes = [
		{ className: 'node-1', label: 'AI' },
		{ className: 'node-2', label: 'CALL' },
		{ className: 'node-3', label: 'SMS' },
		{ className: 'node-4', label: 'BILL' },
		{ className: 'node-5', label: 'WEB' }
	] as const;
</script>

<div class="business-bg pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
	<div class="base-gradient"></div>
	<div class="aurora aurora-1"></div>
	<div class="aurora aurora-2"></div>
	<div class="aurora aurora-3"></div>
	<div class="aurora aurora-4"></div>

	<div class="grid-layer grid-main"></div>
	<div class="grid-layer grid-fine"></div>
	<div class="scan-lines"></div>

	<div class="orbital orbital-1"></div>
	<div class="orbital orbital-2"></div>
	<div class="orbital orbital-3"></div>
	<div class="orbital orbital-4"></div>

	<div class="core-orb">
		<div class="core-inner">PEX</div>
		<div class="core-ring"></div>
	</div>

	<div class="flow-beam beam-1"></div>
	<div class="flow-beam beam-2"></div>
	<div class="flow-beam beam-3"></div>

	{#each nodes as node}
		<div class="service-node {node.className}">
			<span>{node.label}</span>
		</div>
	{/each}

	<div class="noise-layer"></div>
</div>

<style>
	.business-bg {
		background: #020817;
	}

	.base-gradient {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 18% 18%, rgba(0, 229, 255, 0.13), transparent 24%),
			radial-gradient(circle at 82% 16%, rgba(13, 71, 161, 0.28), transparent 30%),
			radial-gradient(circle at 50% 82%, rgba(0, 229, 255, 0.10), transparent 28%),
			linear-gradient(180deg, #020817 0%, #06112b 42%, #020817 100%);
	}

	.aurora {
		position: absolute;
		border-radius: 9999px;
		filter: blur(96px);
		opacity: 0.58;
		animation: auroraFloat 18s ease-in-out infinite;
	}

	.aurora-1 {
		top: 4%;
		left: -12%;
		width: 36rem;
		height: 36rem;
		background: rgba(0, 229, 255, 0.16);
	}

	.aurora-2 {
		top: 14%;
		right: -10%;
		width: 32rem;
		height: 32rem;
		background: rgba(13, 71, 161, 0.24);
		animation-delay: 4s;
	}

	.aurora-3 {
		bottom: -10%;
		left: 20%;
		width: 34rem;
		height: 34rem;
		background: rgba(0, 229, 255, 0.12);
		animation-delay: 8s;
	}

	.aurora-4 {
		bottom: 6%;
		right: 12%;
		width: 26rem;
		height: 26rem;
		background: rgba(8, 47, 109, 0.32);
		animation-delay: 12s;
	}

	.grid-layer {
		position: absolute;
		inset: 0;
		mask-image: radial-gradient(circle at 50% 22%, black, transparent 78%);
	}

	.grid-main {
		opacity: 0.075;
		background-image:
			linear-gradient(to right, rgba(255, 255, 255, 0.32) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(255, 255, 255, 0.32) 1px, transparent 1px);
		background-size: 78px 78px;
		animation: gridDrift 28s linear infinite;
	}

	.grid-fine {
		opacity: 0.04;
		background-image:
			linear-gradient(to right, rgba(0, 229, 255, 0.35) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(0, 229, 255, 0.35) 1px, transparent 1px);
		background-size: 26px 26px;
		animation: gridDriftReverse 18s linear infinite;
	}

	.scan-lines {
		position: absolute;
		inset: 0;
		opacity: 0.045;
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
		background-size: 100% 7px;
	}

	.orbital {
		position: absolute;
		top: 10%;
		left: 50%;
		border-radius: 9999px;
		border: 1px solid rgba(0, 229, 255, 0.08);
		box-shadow: inset 0 0 55px rgba(0, 229, 255, 0.025);
		animation: rotateOrbital linear infinite;
	}

	.orbital-1 {
		width: 30rem;
		height: 30rem;
		margin-left: -15rem;
		animation-duration: 26s;
	}

	.orbital-2 {
		width: 44rem;
		height: 44rem;
		margin-left: -22rem;
		animation-duration: 39s;
		opacity: 0.76;
	}

	.orbital-3 {
		width: 58rem;
		height: 58rem;
		margin-left: -29rem;
		animation-duration: 54s;
		opacity: 0.5;
	}

	.orbital-4 {
		width: 74rem;
		height: 74rem;
		margin-left: -37rem;
		animation-duration: 76s;
		opacity: 0.32;
	}

	.core-orb {
		position: absolute;
		top: 16%;
		left: 50%;
		width: 9rem;
		height: 9rem;
		margin-left: -4.5rem;
		border-radius: 9999px;
		background: radial-gradient(circle, rgba(0, 229, 255, 0.18), rgba(13, 71, 161, 0.12) 42%, transparent 72%);
		filter: drop-shadow(0 0 32px rgba(0, 229, 255, 0.18));
		animation: corePulse 6s ease-in-out infinite;
	}

	.core-inner {
		position: absolute;
		inset: 1.9rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(0, 229, 255, 0.22);
		border-radius: 9999px;
		background: rgba(2, 8, 23, 0.72);
		color: #67e8f9;
		font-size: 1.2rem;
		font-style: italic;
		font-weight: 900;
	}

	.core-ring {
		position: absolute;
		inset: -0.6rem;
		border-radius: 9999px;
		border: 1px dashed rgba(0, 229, 255, 0.18);
		animation: rotateOrbital 22s linear infinite;
	}

	.flow-beam {
		position: absolute;
		left: 50%;
		top: 23%;
		height: 1px;
		width: 42vw;
		transform-origin: left center;
		background: linear-gradient(to right, rgba(0, 229, 255, 0.46), transparent);
		opacity: 0.18;
		animation: beamPulse 5s ease-in-out infinite;
	}

	.beam-1 {
		transform: rotate(14deg);
	}
	.beam-2 {
		transform: rotate(162deg);
		animation-delay: 1.5s;
	}
	.beam-3 {
		transform: rotate(92deg);
		animation-delay: 3s;
	}

	.service-node {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 54px;
		height: 34px;
		padding: 0 11px;
		border: 1px solid rgba(0, 229, 255, 0.16);
		border-radius: 9999px;
		background: rgba(2, 8, 23, 0.72);
		box-shadow: 0 0 26px rgba(0, 229, 255, 0.08);
		color: rgba(103, 232, 249, 0.78);
		font-size: 9px;
		font-weight: 900;
		letter-spacing: 0.18em;
		animation: nodeFloat 7s ease-in-out infinite;
	}

	.node-1 { top: 24%; left: 18%; }
	.node-2 { top: 32%; right: 18%; animation-delay: 1s; }
	.node-3 { bottom: 30%; left: 16%; animation-delay: 2s; }
	.node-4 { bottom: 24%; right: 20%; animation-delay: 3s; }
	.node-5 { top: 58%; left: 50%; animation-delay: 4s; }

	.noise-layer {
		position: absolute;
		inset: 0;
		opacity: 0.03;
		background-image:
			radial-gradient(circle at 20% 30%, white 0, transparent 1px),
			radial-gradient(circle at 60% 70%, white 0, transparent 1px),
			radial-gradient(circle at 80% 20%, white 0, transparent 1px);
		background-size: 120px 120px, 160px 160px, 220px 220px;
	}

	@keyframes auroraFloat {
		0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
		50% { transform: translate3d(24px, -28px, 0) scale(1.08); }
	}

	@keyframes gridDrift {
		from { transform: translate3d(0, 0, 0); }
		to { transform: translate3d(78px, 78px, 0); }
	}

	@keyframes gridDriftReverse {
		from { transform: translate3d(0, 0, 0); }
		to { transform: translate3d(-26px, -26px, 0); }
	}

	@keyframes rotateOrbital {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	@keyframes corePulse {
		0%, 100% { transform: scale(1); opacity: 0.82; }
		50% { transform: scale(1.08); opacity: 1; }
	}

	@keyframes beamPulse {
		0%, 100% { opacity: 0.08; }
		50% { opacity: 0.26; }
	}

	@keyframes nodeFloat {
		0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.72; }
		50% { transform: translate3d(0, -13px, 0); opacity: 1; }
	}
</style>
