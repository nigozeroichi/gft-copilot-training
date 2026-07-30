# The Daily Harvest

The Daily Harvest is a lightweight React + TypeScript e-commerce storefront built with Vite. It is a demo application for browsing products, adding items to a cart, checking out, leaving product reviews, and using an admin area to apply a store-wide sale.

## 🚀 Quick Start Guide for New Developers

### 1. Prerequisites

Make sure you have the following installed on your machine:

- Node.js 18 or newer
- npm (usually comes with Node.js)

If you are on Windows and `npm` is not recognized, install Node.js LTS and restart your terminal.

### 2. Install dependencies

From the project root, run:

```bash
cd eCommApp
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Then open your browser at:

```text
http://localhost:3000
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## 🧩 What this app does

The application includes:

- A landing page for the store
- A product catalog page with item details and pricing
- A shopping cart with quantity updates
- A checkout flow and order confirmation experience
- A review modal for submitting product feedback
- An admin area for applying a store-wide sale percentage

## 📁 Project Structure

```text
eCommApp/
├── public/                  # Static assets and product data files
├── src/
│   ├── components/          # Page components and UI pieces
│   ├── context/             # Shared React context, including cart state
│   ├── test/                # Test setup helpers
│   ├── types/               # TypeScript types
│   ├── utils/               # Utility helpers
│   ├── App.tsx              # Main app routes
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styling
├── index.html               # HTML entry point
├── package.json             # Scripts, dependencies, and test tooling
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite dev server, build, and test configuration
└── README.md                # This file
```

## 🔑 Important files to know

- [package.json](package.json) — defines scripts such as `dev`, `build`, `test`, `lint`, and the project dependencies
- [vite.config.ts](vite.config.ts) — controls the Vite development server, build output, and test environment
- [tsconfig.json](tsconfig.json) — sets TypeScript compiler options and strictness rules
- [src/App.tsx](src/App.tsx) — defines the app routes and overall page layout
- [src/components/ProductsPage.tsx](src/components/ProductsPage.tsx) — shows the catalog and product interactions
- [src/components/CartPage.tsx](src/components/CartPage.tsx) — handles cart display and checkout behavior
- [src/context/CartContext.tsx](src/context/CartContext.tsx) — stores and updates cart state across the app
- [src/components/LoginPage.tsx](src/components/LoginPage.tsx) and [src/components/AdminPage.tsx](src/components/AdminPage.tsx) — implement the admin experience

## 🛠️ Available Scripts

Run these from the `eCommApp` folder:

- `npm run dev` — start the local development server
- `npm run build` — build the app for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint checks
- `npm run test` — start Vitest in watch mode
- `npm run test:run` — run the test suite once
- `npm run test:coverage` — run tests and generate a coverage report
- `npm run test:ui` — open the Vitest UI

## 🧪 Testing

This project uses Vitest with Testing Library and jsdom.

### Run the tests

```bash
npm run test:run
```

### Run tests with coverage

```bash
npm run test:coverage
```

### Open the interactive test UI

```bash
npm run test:ui
```

### Example test types to add

- Component tests for pages and modals
- Interaction tests for adding items to the cart
- Validation tests for login and admin flows
- Context tests for cart behavior

## ⚙️ Configuration and environment notes

This project does not currently require any special environment variables for local development. The app is configured through the standard Vite and TypeScript setup files.

## 🧰 Troubleshooting

### `npm` is not recognized

Install Node.js LTS and restart your terminal or VS Code.

### `npm install` fails

Make sure you are in the `eCommApp` folder and that your internet connection is available.

### The dev server does not start

Check the terminal output for port conflicts. If port `3000` is already in use, stop the other process or change the port in [vite.config.ts](vite.config.ts).

### The page loads but looks broken

Confirm that dependencies were installed successfully and that the dev server is still running.

### Tests fail unexpectedly

Run:

```bash
npm install
npm run test:run
```

If the issue continues, verify that you are using a recent Node.js version.

## 💡 Beginner-friendly tips

- Start by reading [src/App.tsx](src/App.tsx) to understand the app routes.
- Then open [src/components/ProductsPage.tsx](src/components/ProductsPage.tsx) and [src/context/CartContext.tsx](src/context/CartContext.tsx) to understand the main shopping flow.
- Use the test scripts often while changing components to catch regressions early.
