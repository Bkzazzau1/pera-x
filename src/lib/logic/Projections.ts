// File: src/lib/logic/Projections.ts

export interface ProjectionPoint {
	month: string;
	supply: number;
	demand: number;
}

/**
 * Generates a service-revenue burn projection for the Pera-X utility model.
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

	const BASE_BURN_RATE = 0.02;
	const ACCELERATION_FACTOR = 0.0015;

	return months.map((month, i) => {
		// Demand follows service-credit adoption across AI, calls, SMS, web, and bills.
		const demand = Math.round(100 * Math.pow(1.25, i));

		const effectiveBurnRate = BASE_BURN_RATE + i * ACCELERATION_FACTOR;
		const monthlyBurn = currentSupply * effectiveBurnRate;

		currentSupply -= monthlyBurn;

		return {
			month,
			supply: Math.round(currentSupply),
			demand
		};
	});
};
