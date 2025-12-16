## Agri-Waste Mart

Agri-Waste Mart is a digital marketplace connecting farmers with industries by enabling the sale and purchase of agricultural waste such as rice straw, jute sticks, and sugarcane bagasse.

## Problem Statement
In Bangladesh, large amounts of agricultural waste are burned or discarded due to lack of structured market access. This causes:
- Environmental pollution
- Loss of potential farmer income
- Raw material shortages for biomass-based industries

## Solution
Agri-Waste Mart provides:
- A platform for farmers to list agricultural waste
- A marketplace for buyers to browse, filter, and contact sellers
- Transparent pricing and location-based discovery

## Tech Stack
- **Frontend:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Backend:** Firebase Firestore
- **Authentication:** Firebase (planned)
- **Hosting:** Vercel

## System Architecture
- Client-side rendered pages for fast UX
- Firestore as NoSQL database for listings
- Secure environment variable handling
- Modular component-based UI

## Security Considerations
- Firebase rules restrict write access to authenticated users (future)
- Environment variables protect API keys
- Read-only access for buyers

## Future Roadmap
- User authentication (farmer & buyer roles)
- AI-based price recommendation
- Logistics & transport integration
- Mobile app version

## Impact
- Reduces crop burning
- Increases farmer income
- Promotes circular economy in Bangladesh

## Deployment Instructions
1. Add Firebase config to `.env.local`
2. Install dependencies:
```bash
npm install
