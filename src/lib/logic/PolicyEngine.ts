// File: src/lib/logic/PolicyEngine.ts

export interface PolicyTier {
	label: string;
	minHoldingDays: number;
	discount: string; // Formatted as percentage string for UI clarity
	color: string; // Direct hex for 2050 Grade UI synchronization
}

/**
 * Utility bill discount bands from the whitepaper.
 * Discounts begin after 10 holding days and are capped at 30%.
 */
const TIERS: PolicyTier[] = [
	{ label: '60+ Day Utility', minHoldingDays: 60, discount: '30%', color: '#60a5fa' },
	{ label: '50 Day Utility', minHoldingDays: 50, discount: '25%', color: '#34d399' },
	{ label: '40 Day Utility', minHoldingDays: 40, discount: '20%', color: '#22d3ee' },
	{ label: '30 Day Utility', minHoldingDays: 30, discount: '15%', color: '#fbbf24' },
	{ label: '20 Day Utility', minHoldingDays: 20, discount: '10%', color: '#94a3b8' },
	{ label: '10 Day Utility', minHoldingDays: 10, discount: '5%', color: '#cd7f32' }
];

/**
 * Determines user eligibility based on continuous holding days.
 * Implements a "Search-to-Top" algorithm to ensure the highest qualified tier is returned.
 */
export function getEligibleTier(holdingDays: number): PolicyTier | null {
	if (holdingDays < 10) return null;

	// Sort and find to ensure the user always receives their maximum benefit
	return (
		[...TIERS]
			.sort((a, b) => b.minHoldingDays - a.minHoldingDays)
			.find((tier) => holdingDays >= tier.minHoldingDays) ?? null
	);
}

/**
 * Calculates the percentage completion toward the next tier.
 * Essential for the "Tactile Depth" of the Portfolio UI.
 */
export function getNextTierProgress(holdingDays: number) {
	const sorted = [...TIERS].sort((a, b) => a.minHoldingDays - b.minHoldingDays);
	const nextTier = sorted.find((t) => t.minHoldingDays > holdingDays);

	if (!nextTier) return 100; // User is at the 60+ day cap

	const currentTier = sorted.filter((t) => t.minHoldingDays <= holdingDays).pop();
	const min = currentTier ? currentTier.minHoldingDays : 0;

	return Math.min(100, Math.max(0, ((holdingDays - min) / (nextTier.minHoldingDays - min)) * 100));
}
