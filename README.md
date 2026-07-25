# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Tayyab Store — E-Commerce Frontend

A responsive e-commerce web app built with React and Tailwind CSS. It handles product browsing, cart management, and a full order flow using React Router for navigation and Context API for shared cart state.

**Live Demo:** [https://tayyab-store.vercel.app/](https://tayyab-store.vercel.app/)
**Repo:** [https://github.com/TM-Network-web/React-Projects](https://github.com/TM-Network-web/React-Projects)

## Features

- **Add to Cart** — Add, remove, and update product quantities. Cart totals update in real time.
- **Category Filtering** — Browse products by category without reloading the page.
- **Search Filter** — Live search that narrows down products as you type.
- **Order Process** — Full checkout flow from cart review to order confirmation.

## Tech Stack

- **React** — component structure and state management
- **Tailwind CSS** — styling and responsive layout
- **React Router** — client-side routing between pages (product list, product detail, cart, checkout, order confirmation)
- **Context API** — global cart state shared across components
- **Local product data** (`data.jsx`) — product catalog used to render listings and details

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/TM-Network-web/React-Projects.git
cd React-Projects
npm install
```

Run the development server:

```bash
npm run dev
```

The app will be running at `http://localhost:5173` (or `3000` if using Create React App).

## Project Structure

```
src/
├── components/
│   ├── cartItem.jsx
│   ├── categoryFilter.jsx
│   ├── footer.jsx
│   ├── loading.jsx
│   ├── navbar.jsx
│   ├── productCard.jsx
│   └── searchFilter.jsx
├── context/
│   └── cartContext.jsx
├── data/
│   └── data.jsx
├── pages/
│   ├── cart.jsx
│   ├── checkout.jsx
│   ├── orderConfirmation.jsx
│   ├── productDetail.jsx
│   └── productList.jsx
├── App.jsx
└── index.css
```

## How It Works

- **`productList.jsx`** renders the product catalog from `data.jsx`, using `categoryFilter.jsx` and `searchFilter.jsx` to narrow down what's shown based on the selected category and search input.
- **`cartContext.jsx`** holds the cart state (items, quantities, totals) via Context API, so it's accessible from the navbar, product cards, and cart page without prop drilling.
- **`productCard.jsx`** handles the "Add to Cart" action, dispatching updates to the shared cart context.
- **`cart.jsx`** displays cart contents using `cartItem.jsx`, letting users update quantities or remove items before proceeding.
- **`checkout.jsx`** collects order details and hands off to **`orderConfirmation.jsx`** once the order is placed.
- **`loading.jsx`** handles loading states while data/pages are being rendered.

## What I'd Improve Next

- [ ] Connect to a real backend/database instead of local/mock data
- [ ] Add user authentication
- [ ] Persist cart in localStorage so it survives a page refresh
- [ ] Add payment gateway integration

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built by Tayyab — feel free to reach out if you have feedback or questions.