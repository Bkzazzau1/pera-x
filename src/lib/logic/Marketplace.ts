// File: src/lib/logic/Marketplace.ts

import { getEligibleTier } from './PolicyEngine';

/** * Utility pricing interface
 * Converts real service value into PX using current market price.
 */
export interface ParityMetrics {
	spotPrice: number;
	growthReleaseLevel: number;
	launchPrice: number;
}

export interface ServiceCredit {
	id: string;
	name: string;
	brand: string;
	marketPrice: number; // Global MSRP in USD
	category: 'AI' | 'Calling' | 'SMS' | 'Website' | 'Bills';
	image: string;
	specHighlight: string;
}

/**
 * Whitepaper utility catalog.
 * Users convert PX into service credits, minutes, SMS units, build credits, or bill credits.
 */
export const SERVICE_CREDITS: ServiceCredit[] = [
	{
		id: '1',
		name: 'Agentic AI Pack',
		brand: 'AI Tools',
		marketPrice: 15,
		category: 'AI',
		image: 'AI',
		specHighlight: 'Detector • Rephraser • Docs'
	},
	{
		id: '2',
		name: 'App-to-Phone Minutes',
		brand: 'Voice API',
		marketPrice: 10,
		category: 'Calling',
		image: 'CALL',
		specHighlight: 'Normal Phone Routing'
	},
	{
		id: '3',
		name: 'SMS Bundle',
		brand: 'Messaging',
		marketPrice: 8,
		category: 'SMS',
		image: 'SMS',
		specHighlight: 'OTP • Bulk • Alerts'
	},
	{
		id: '4',
		name: 'AI Website Builder',
		brand: 'Builder',
		marketPrice: 25,
		category: 'Website',
		image: 'WEB',
		specHighlight: 'Generate • Edit • Publish'
	},
	{
		id: '5',
		name: 'Utility Bill Credit',
		brand: 'Bills',
		marketPrice: 30,
		category: 'Bills',
		image: 'BILL',
		specHighlight: 'Electricity • TV • Internet'
	}
];

export const GADGETS = SERVICE_CREDITS;

/**
 * Whitepaper pricing data.
 * Fetches real-time metrics based on current protocol phase.
 */
export function fetchParityMetrics(): ParityMetrics {
	return {
		spotPrice: 0.00018,
		launchPrice: 0.00009,
		growthReleaseLevel: 0.00027
	};
}

/**
 * Dynamic utility pricing.
 * Service value is calculated first; token quantity is calculated after.
 */
export function calculateGlobalParity(metrics: ParityMetrics): number {
	return metrics.spotPrice;
}

/**
 * Dynamic Discount Engine
 * Calculates the PX cost after applying tier-based subsidies.
 */
export function calculatePXCost(usdPrice: number, pxRate: number, discountPercent: number): number {
	// Utility bill discount does not reduce the user's credited service value.
	const subsidizedValue = usdPrice * (1 - discountPercent);
	return Math.round(subsidizedValue / pxRate);
}

/**
 * Savings Summary for User Dashboard
 */
export function getSavingsSummary(service: ServiceCredit, holdingDays: number) {
	const tier = getEligibleTier(holdingDays);
	const discount = tier ? parseFloat(tier.discount) / 100 : 0;
	const savings = service.marketPrice * discount;

	return {
		tier: tier?.label || 'Ineligible',
		finalPrice: service.marketPrice - savings,
		totalSaved: savings
	};
}
