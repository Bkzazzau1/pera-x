<script lang="ts">
	/**
	 * HeartbeatMini
	 * Tiny ECG-like pulse line for cards (circulating supply, node status, etc.)
	 * - Light, premium, subtle
	 * - Works on mobile
	 */

	export let height: number = 28; // px
	export let speed: number = 2.6; // seconds
	export let intensity: 'soft' | 'normal' | 'strong' = 'normal';
	export let label: string = 'LIVE';

	const glow =
		intensity === 'strong'
			? 'drop-shadow(0 0 10px rgba(59,130,246,0.35)) drop-shadow(0 0 24px rgba(34,211,238,0.22))'
			: intensity === 'soft'
				? 'drop-shadow(0 0 6px rgba(59,130,246,0.22))'
				: 'drop-shadow(0 0 8px rgba(59,130,246,0.28))';

	const strokeOpacity = intensity === 'strong' ? 0.95 : intensity === 'soft' ? 0.65 : 0.8;

	// ECG-style path (normalized to viewBox 0..100)
	// Flat → small rise → sharp spike → dip → recover → flat
	const d =
		'M0 52 L10 52 L18 52 L24 52 ' +
		'L28 46 L32 58 ' +
		'L36 18 L40 84 ' +
		'L45 52 L52 52 ' +
		'L58 44 L62 56 ' +
		'L66 52 L80 52 L100 52';
</script>

<div class="hb" style="height: {height}px; --hb-speed: {speed}s;">
	<!-- background grid film (very subtle) -->
	<div class="hb-film" aria-hidden="true"></div>

	<svg
		class="hb-svg"
		viewBox="0 0 100 100"
		preserveAspectRatio="none"
		role="img"
		aria-label="Heartbeat pulse indicator"
	>
		<defs>
			<linearGradient id="hbStroke" x1="0" y1="0" x2="1" y2="0">
				<stop offset="0%" stop-color="rgba(255,255,255,0.10)" />
				<stop offset="28%" stop-color="rgba(59,130,246,0.95)" />
				<stop offset="62%" stop-color="rgba(34,211,238,0.90)" />
				<stop offset="100%" stop-color="rgba(52,211,153,0.65)" />
			</linearGradient>

			<linearGradient id="hbScan" x1="0" y1="0" x2="1" y2="0">
				<stop offset="0%" stop-color="rgba(255,255,255,0)" />
				<stop offset="45%" stop-color="rgba(255,255,255,0)" />
				<stop offset="55%" stop-color="rgba(255,255,255,0.9)" />
				<stop offset="65%" stop-color="rgba(255,255,255,0)" />
				<stop offset="100%" stop-color="rgba(255,255,255,0)" />
			</linearGradient>

			<filter id="hbGlow">
				<feGaussianBlur stdDeviation="1.2" result="b" />
				<feMerge>
					<feMergeNode in="b" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>

		<!-- Base line -->
		<path
			{d}
			fill="none"
			stroke="url(#hbStroke)"
			stroke-width="2.2"
			stroke-linecap="round"
			filter="url(#hbGlow)"
			style="opacity: {strokeOpacity}; filter: {glow};"
		/>

		<!-- Moving scan highlight -->
		<path
			class="hb-scan"
			{d}
			fill="none"
			stroke="url(#hbScan)"
			stroke-width="4.2"
			stroke-linecap="round"
			opacity="0.55"
		/>

		<!-- Tiny node dot (travels with scan illusion) -->
		<circle class="hb-dot" r="2.2" cx="0" cy="52" />
	</svg>

	<div class="hb-meta">
		<span class="hb-led"></span>
		<span class="hb-text">{label}</span>
	</div>
</div>

<style>
	.hb {
		position: relative;
		width: 100%;
		border-radius: 16px;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
	}

	.hb-film {
		position: absolute;
		inset: 0;
		opacity: 0.14;
		background-image:
			linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 1px, transparent 1px);
		background-size: 26px 26px;
		mask-image: radial-gradient(circle at 50% 40%, black, transparent 70%);
		pointer-events: none;
	}

	.hb-svg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}

	/* Scan “sweep” */
	.hb-scan {
		stroke-dasharray: 24 999;
		animation: hbSweep var(--hb-speed) linear infinite;
	}

	@keyframes hbSweep {
		from {
			stroke-dashoffset: 0;
		}
		to {
			stroke-dashoffset: -1000;
		}
	}

	/* Dot moves left → right (matches the pulse vibe) */
	.hb-dot {
		fill: rgba(96, 165, 250, 0.95);
		filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.45));
		animation: hbDot var(--hb-speed) linear infinite;
	}

	@keyframes hbDot {
		0% {
			transform: translateX(0px);
			opacity: 0;
		}
		6% {
			opacity: 1;
		}
		100% {
			transform: translateX(100px);
			opacity: 0;
		}
	}

	.hb-meta {
		position: absolute;
		right: 10px;
		top: 8px;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 6px 10px;
		border-radius: 999px;
		background: rgba(0, 0, 0, 0.35);
		border: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
	}

	.hb-led {
		width: 6px;
		height: 6px;
		border-radius: 999px;
		background: rgba(59, 130, 246, 0.9);
		box-shadow: 0 0 10px rgba(59, 130, 246, 0.45);
		animation: hbPulse 1.2s ease-in-out infinite;
	}

	@keyframes hbPulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 0.75;
		}
		50% {
			transform: scale(1.25);
			opacity: 1;
		}
	}

	.hb-text {
		font-size: 9px;
		font-weight: 900;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.5);
	}
</style>
