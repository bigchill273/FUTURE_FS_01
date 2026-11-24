# Natnael Shumet | Portfolio

A modern personal portfolio and blog built with React, TypeScript, and Tailwind CSS. It showcases the developer's profile, technical experience, featured work, and published articles while including a lightweight full-stack API for content and contact submissions.

## Overview

This project is designed to function as a professional portfolio website for a full stack developer. It includes:

- A polished landing page with animated hero content, skill highlights, and profile summary
- A dedicated projects section that presents featured work and technical stack
- A blog section powered by Markdown content and MongoDB
- A contact form connected to a backend API and EmailJS delivery flow
- Responsive, mobile-friendly UI built with modern frontend tooling

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- React Icons
- Framer Motion (via `motion`)
- React Markdown

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- CORS

## Project Structure

```bash
.
├── public/                  # Static assets such as images and public files
├── server/                 # Express API and MongoDB configuration
│   ├── data/               # Seed blog post data
│   ├── models/             # Mongoose models
│   ├── services/           # Data access logic
│   ├── .env.example        # Example environment settings
│   ├── index.js            # Server entry point
│   └── package.json        # Backend dependencies and scripts
├── src/                    # React application source code
│   ├── components/         # Reusable UI components
│   ├── lib/                # Portfolio data and constants
│   ├── pages/              # Route-level pages
│   ├── sections/           # Page sections such as Hero, About, Projects
│   ├── App.tsx             # Application routes
│   └── main.tsx            # Entry point
├── .env                    # Local env variables (if present)
├── package.json            # Frontend dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig*.json         # TypeScript configuration
├── index.html             # App entry HTML
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

## Features

- Responsive single-page portfolio experience
- Animated hero and custom motion-based UI elements
- Technology stack showcase and profile branding
- Featured project cards with categories and stack tags
- Markdown-based blog with published article filtering
- Contact form validation and backend message handling
- Lightweight API health checks and blog endpoints

## Getting Started

### Prerequisites

Before running the project locally, ensure you have the following installed:

- Node.js 18+
- npm
- MongoDB running locally or accessible remotely

### 1) Install frontend dependencies

```bash
npm install
```

### 2) Install backend dependencies

```bash
npm --prefix server install
```

### 3) Configure environment variables

Create a `server/.env` file using the example configuration:

```bash
cp server/.env.example server/.env
```

Then update the values as needed:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
```

> The frontend dev server proxies `/api` requests to the local API server, so the backend should run on port `5000` unless you override it.

### 4) Run the application

Start the API in one terminal:

```bash
npm run dev:server
```

Start the frontend in another terminal:

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal (typically `http://localhost:5173`).

## Deploying the frontend to Vercel

Import the repository into Vercel with the repository root as the project root.
Use `npm run build` as the build command and `dist` as the output directory.
The included `vercel.json` rewrite serves the React app for direct visits and
refreshes on routes such as `/blog` and `/blog/:slug`.

The Vercel project hosts the Vite frontend only. Deploy the Express API in
`server/` separately as a Node.js service and connect it to a persistent MongoDB
deployment such as MongoDB Atlas. Configure these environment variables on the
API service:

```env
MONGODB_URI=<your MongoDB connection string>
CLIENT_ORIGIN=https://<your Vercel domain>
```

Set the API service's `PORT` using the value provided by its hosting platform.
`CLIENT_ORIGIN` must match the deployed frontend origin exactly. You can provide
multiple comma-separated origins if you want to allow both production and
specific preview domains. Update it if you later use a custom domain.

Configure these variables in Vercel for the Production environment (and Preview
if needed):

```env
VITE_API_URL=https://<your API service domain>
VITE_EMAILJS_SERVICE_ID=<your EmailJS service ID>
VITE_EMAILJS_TEMPLATE_ID=<your EmailJS template ID>
VITE_EMAILJS_PUBLIC_KEY=<your EmailJS public key>
```

Set `VITE_API_URL` to the API origin only, without a trailing slash or `/api`
suffix. Vite embeds `VITE_*` values into the browser bundle at build time, so
redeploy after changing them. Do not put `MONGODB_URI` in a `VITE_*` variable:
it must remain private on the API service. Restrict the EmailJS service to your
deployed domain in its dashboard.

Before sharing the site, verify `/api/health`, open and refresh a blog article
URL directly, and submit a test contact message.

## Scripts

### Frontend

```bash
npm run dev       # Start the Vite development server
npm run build     # Build the production bundle
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint checks
```

### Backend

```bash
npm --prefix server run dev    # Start the Express server with nodemon
npm --prefix server run start  # Start the production server
```

## API Overview

The backend exposes a small API for the portfolio's blog and contact functionality.

### Blog endpoints

- `GET /api/posts` — Returns all published posts, newest first
- `GET /api/posts?limit=5` — Returns a limited number of recent posts
- `GET /api/posts/:slug` — Returns a single published article by slug

### Contact and health

- `POST /api/contact` — Stores a validated contact message
- `GET /api/health` — Checks API health status

### Notes

- The API seeds the blog collection automatically when it is empty by loading sample Markdown posts from `server/data/mock-blog-posts.mjs`.
- Only published posts whose publication date has passed are available through the public API.
- Contact submissions are stored in MongoDB before the EmailJS notification workflow is triggered.

## Author

Natnael Shumet

- Email: nattyshumet1627@gmail.com
- GitHub: https://github.com/bigchill273
- LinkedIn: https://www.linkedin.com/in/natnael-shumet-953420434/
- X(Twitter): https://x.com/atomix_238

## License

This project does not currently declare a license file, so usage rights should be confirmed before reuse or redistribution.
