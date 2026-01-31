// File: src/lib/logic/PolicyEngine.ts

export interface PolicyTier {
	label: string;
	minBalance: number;
	discount: string; // Formatted as percentage string for UI clarity
	color: string; // Direct hex for 2050 Grade UI synchronization
}

/**
 * The Pera-X Tier Hierarchy.
 * Structured to incentivize capital retention and drive the PX Scarcity Delta.
 */
const TIERS: PolicyTier[] = [
	{ label: 'Platinum', minBalance: 500000, discount: '25%', color: '#60a5fa' },
	{ label: 'Gold', minBalance: 250000, discount: '18%', color: '#fbbf24' },
	{ label: 'Silver', minBalance: 100000, discount: '12%', color: '#94a3b8' },
	{ label: 'Bronze', minBalance: 50000, discount: '7%', color: '#cd7f32' }
];

/**
 * Determines user eligibility based on live wallet balance.
 * Implements a "Search-to-Top" algorithm to ensure the highest qualified tier is returned.
 */
export function getEligibleTier(balance: number): PolicyTier | null {
	if (balance <= 0) return null;

	// Sort and find to ensure the user always receives their maximum benefit
	return (
		TIERS.sort((a, b) => b.minBalance - a.minBalance).find((tier) => balance >= tier.minBalance) ??
		null
	);
}

/**
 * Calculates the percentage completion toward the next tier.
 * Essential for the "Tactile Depth" of the Portfolio UI.
 */
export function getNextTierProgress(balance: number) {
	const sorted = [...TIERS].sort((a, b) => a.minBalance - b.minBalance);
	const nextTier = sorted.find((t) => t.minBalance > balance);

	if (!nextTier) return 100; // User is at Platinum

	const currentTier = sorted.filter((t) => t.minBalance <= balance).pop();
	const min = currentTier ? currentTier.minBalance : 0;

	return Math.min(100, Math.max(0, ((balance - min) / (nextTier.minBalance - min)) * 100));
}
