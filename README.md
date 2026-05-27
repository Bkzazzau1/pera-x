# Pera-X dApp

Investor-ready SvelteKit dApp for the Pera-X Solana utility-token ecosystem.

Pera-X separates the token and platform-spending layer:

```text
PEX = Solana ecosystem token / asset
Credits = internal platform spending balance for services
```

Users can follow the dApp to understand the protocol, connect a wallet, view the dashboard, explore trading/redeem flows, and move from the token layer into the real utility platform.

## Live Utility Site

```text
https://app.pera-x.xyz
```

This link is now exposed inside the dApp header as **Utility App** so users, investors, and community members can move from the PEX dashboard to the actual service platform.

## Current dApp Sections

- Marketing landing page for the Pera-X utility story.
- Protocol dashboard for supply, burn, service audit, and settlement narrative.
- Trade route for PEX trading flow.
- Redeem route for utility/service redemption direction.
- Analytics route for public protocol metrics.
- Global header with wallet connection and utility-site link.

## Smart Contract Alignment

The dApp narrative is aligned with the `Pera-X-ecosystem` contract model:

- PEX utility payment transfer to Trading Company token accounts.
- External utility-payment recording.
- Trading Company burn execution.
- Market-conditional release policy.
- Pause and emergency-pause controls.
- Authority transfer controls.

## Developing

Install dependencies:

```sh
npm install
```

Start development server:

```sh
npm run dev
```

Build production version:

```sh
npm run build
```

Preview production build:

```sh
npm run preview
```

## Recommended Next Improvements

1. Replace all simulated dashboard numbers with backend/contract-fed data.
2. Add verified contract/program ID and token mint display.
3. Add clear labels for Devnet/Mainnet status.
4. Wire wallet connection to real Solana wallet adapters.
5. Add direct transaction flow for PEX-to-Credits utility payment.
6. Add a `/utility` bridge page explaining how PEX converts into Credits on the utility platform.
7. Publish analytics from real events: payments, burns, supply, releases, and service activations.
