<div class="business-bg pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
	<div class="base-gradient"></div>
	<div class="aurora aurora-1"></div>
	<div class="aurora aurora-2"></div>

	<div class="grid-layer"></div>
	<div class="spotlight spotlight-1"></div>
	<div class="spotlight spotlight-2"></div>

	<div class="core-orb">
		<div class="core-inner">PEX</div>
	</div>

	<div class="service-node node-1"><span>AI</span></div>
	<div class="service-node node-2"><span>CALL</span></div>
	<div class="service-node node-3"><span>SMS</span></div>
</div>

<style>
	.business-bg {
		background: #020817;
		contain: strict;
		transform: translateZ(0);
	}

	.base-gradient {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 18% 18%, rgba(0, 229, 255, 0.12), transparent 24%),
			radial-gradient(circle at 82% 18%, rgba(13, 71, 161, 0.24), transparent 31%),
			linear-gradient(180deg, #020817 0%, #06112b 44%, #020817 100%);
	}

	.aurora {
		position: absolute;
		border-radius: 9999px;
		filter: blur(56px);
		opacity: 0.42;
		will-change: transform;
		animation: auroraFloat 26s ease-in-out infinite;
	}

	.aurora-1 {
		top: 5%;
		left: -8%;
		width: 28rem;
		height: 28rem;
		background: rgba(0, 229, 255, 0.14);
	}

	.aurora-2 {
		bottom: -12%;
		right: -8%;
		width: 30rem;
		height: 30rem;
		background: rgba(13, 71, 161, 0.24);
		animation-delay: 8s;
	}

	.grid-layer {
		position: absolute;
		inset: 0;
		opacity: 0.055;
		background-image:
			linear-gradient(to right, rgba(255, 255, 255, 0.28) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(255, 255, 255, 0.28) 1px, transparent 1px);
		background-size: 86px 86px;
		mask-image: radial-gradient(circle at 50% 24%, black, transparent 78%);
	}

	.spotlight {
		position: absolute;
		height: 1px;
		width: 42vw;
		background: linear-gradient(to right, rgba(0, 229, 255, 0.3), transparent);
		opacity: 0.18;
	}

	.spotlight-1 {
		top: 24%;
		left: 48%;
		transform: rotate(14deg);
	}

	.spotlight-2 {
		top: 34%;
		right: 46%;
		transform: rotate(166deg);
	}

	.core-orb {
		position: absolute;
		top: 16%;
		left: 50%;
		width: 8rem;
		height: 8rem;
		margin-left: -4rem;
		border-radius: 9999px;
		background: radial-gradient(circle, rgba(0, 229, 255, 0.18), rgba(13, 71, 161, 0.08) 48%, transparent 72%);
		animation: corePulse 8s ease-in-out infinite;
		will-change: transform, opacity;
	}

	.core-inner {
		position: absolute;
		inset: 1.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(0, 229, 255, 0.18);
		border-radius: 9999px;
		background: rgba(2, 8, 23, 0.72);
		color: #67e8f9;
		font-size: 1.05rem;
		font-style: italic;
		font-weight: 900;
	}

	.service-node {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 48px;
		height: 30px;
		padding: 0 10px;
		border: 1px solid rgba(0, 229, 255, 0.14);
		border-radius: 9999px;
		background: rgba(2, 8, 23, 0.66);
		color: rgba(103, 232, 249, 0.72);
		font-size: 8px;
		font-weight: 900;
		letter-spacing: 0.16em;
		will-change: transform;
		animation: nodeFloat 10s ease-in-out infinite;
	}

	.node-1 { top: 25%; left: 18%; }
	.node-2 { top: 31%; right: 18%; animation-delay: 2s; }
	.node-3 { bottom: 29%; left: 18%; animation-delay: 4s; }

	@keyframes auroraFloat {
		0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
		50% { transform: translate3d(14px, -18px, 0) scale(1.04); }
	}

	@keyframes corePulse {
		0%, 100% { transform: scale(1); opacity: 0.78; }
		50% { transform: scale(1.04); opacity: 0.95; }
	}

	@keyframes nodeFloat {
		0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.66; }
		50% { transform: translate3d(0, -8px, 0); opacity: 0.92; }
	}

	@media (max-width: 768px) {
		.aurora {
			filter: blur(40px);
			opacity: 0.32;
			animation: none;
		}

		.core-orb,
		.service-node {
			animation: none;
		}

		.service-node,
		.spotlight {
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.aurora,
		.core-orb,
		.service-node {
			animation: none !important;
		}
	}
</style>
