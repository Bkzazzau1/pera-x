// File: src/lib/logic/Projections.ts

export interface ProjectionPoint {
	month: string;
	supply: number;
	demand: number;
}

/**
 * Generates an exponential supply contraction model for the Pera-X Protocol.
 * Implements the "Burn-Velocity" paradox where higher demand accelerates scarcity.
 */
export const generateProjection = (initialSupply: number): ProjectionPoint[] => {
	const months = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC'
	];
	let currentSupply = initialSupply;

	// Base Economic Constants for $5B Valuation
	const BASE_BURN_RATE = 0.024; // 2.4% Scarcity Delta
	const ACCELERATION_FACTOR = 0.0015; // Burn acceleration per month of growth

	return months.map((month, i) => {
		// Calculate variable demand (Gadget Orders)
		// Demand follows a compounding growth curve to simulate market adoption
		const demand = Math.round(100 * Math.pow(1.25, i));

		// Exponential Burn Logic:
		// As time (i) and demand increase, the burn efficiency rises
		const effectiveBurnRate = BASE_BURN_RATE + i * ACCELERATION_FACTOR;
		const monthlyBurn = currentSupply * effectiveBurnRate;

		currentSupply -= monthlyBurn;

		return {
			month,
			// Return rounded supply to maintain Accountant's precision
			supply: Math.round(currentSupply),
			demand
		};
	});
};
