# Agri-Waste Mart

**Agri-Waste Mart** is a simple digital marketplace that connects **farmers** with **buyers/factories** to trade agricultural waste materials such as rice straw, jute sticks, and sugarcane bagasse.
The goal is to **reduce agricultural waste**, **create additional income for farmers**, and **support sustainable industrial raw materials**.

---

## Problem Statement

In Bangladesh, large amounts of agricultural waste are either burned or discarded due to:

* Lack of a centralized marketplace
* No direct connection between farmers and buyers
* Inefficient price discovery and communication

This leads to **environmental pollution** and **lost economic value**.

---

## Solution

Agri-Waste Mart provides:

* A **Farmer Portal** to list agricultural waste easily
* A **Buyer Portal** to browse, filter, and contact sellers
* A **simple, fast, and accessible UI** built for rapid adoption

This MVP focuses on **speed, usability, and real-world feasibility**.

---

## Farmer Features (`/sell`)

* Post agricultural waste listings
* Select waste type (Rice Straw, Jute Sticks, Sugarcane Bagasse)
* Add quantity, price, and location
* One-click listing submission using Firebase

---

## Buyer Features (`/buy`)

* View all available waste listings in a grid layout
* Filter listings by waste type
* Search listings by location (case-insensitive)
* Contact seller button (placeholder for future expansion)

---

## Tech Stack

* **Frontend:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS
* **Backend / Database:** Firebase Firestore
* **Deployment:** Vercel (recommended)

---

## Project Structure (Key Files)

```
/app
 ├── buy/page.tsx        # Buyer page
 ├── sell/page.tsx       # Farmer page
 ├── layout.tsx          # Root layout
 ├── page.tsx            # Home redirect
/lib
 ├── firebase.ts         # Firebase configuration
/components
 ├── Header.tsx          # App header
```

---

## Firebase Setup

1. Create a Firebase project
2. Enable **Firestore Database**
3. Add your Firebase config to:

```
.env.local
```

Example:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

⚠️ `.env.local` is ignored via `.gitignore` for security.

---

## How to Run Locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

---

## Demo Data

The Firestore database includes **dummy listings** for:

* Rice Straw
* Jute Sticks
* Sugarcane Bagasse

This ensures the Buyer page looks populated during demos.

---

## Security Notes

* Firebase credentials are stored in environment variables
* Firestore rules can be tightened for production use
* No authentication yet (planned future feature)

---

## Future Improvements

* User authentication (Farmer / Buyer roles)
* Real contact system (phone / WhatsApp integration)
* Price analytics & demand insights
* Location-based sorting
* Bengali language support

---

## License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for details.

---

## Author

**Suhail Al Mehedi**
GitHub: [https://github.com/nabil3962](https://github.com/nabil3962)

---

