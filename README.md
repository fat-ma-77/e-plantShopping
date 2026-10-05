# Paradise Nursery

Paradise Nursery is a React and Redux shopping cart application for an online plant shop. Browse three collections—Air Purifying, Tropical, and Succulents—with six unique houseplants in each category. Add plants to the cart, adjust quantities, delete items, and view live per-item and order totals.

## Features

- Responsive landing page with company name, About Us content, background styling, and Get Started button.
- Shared navigation bar with Home, Plants, About Us, and a dynamic cart count.
- 18 unique products across 3 categories.
- Redux Toolkit cart state with add, increase, decrease, delete, and clear actions.
- Buttons become disabled and show “Added” after a product is in the cart.
- Checkout confirmation message and Continue Shopping link.

## Run locally

```bash
npm install
npm run dev
```

## Grading file map

- `src/AboutUs.jsx` — company details.
- `src/App.css` — landing-page background and responsive styling.
- `src/App.jsx` — landing page, navigation, cart view, and checkout flow.
- `src/CartSlice.jsx` — Redux cart slice.
- `src/ProductList.jsx` — categorized product catalog.
- `src/CartItem.jsx` — quantity controls, delete action, and item totals.
