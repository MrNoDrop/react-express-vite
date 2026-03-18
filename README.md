# React Express Template (2026 Modernized Edition)

A full-stack application template using React for the frontend and Express for the backend, modernized with the latest technologies for 2026.

## Features

- **Modern Frontend:** Powered by React 18 and Vite for a fast and efficient development experience.
- **Robust Backend:** Built with Express.js, a minimal and flexible Node.js web application framework.
- **ES Modules:** The entire backend is written using ES modules, the modern standard for JavaScript.
- **State Management:** Includes Redux for predictable state management.
- **Routing:** Uses React Router v6 for declarative routing.
- **Linting:** Includes a modern ESLint and Prettier configuration to enforce code style and catch errors.

## Tech Stack

### Frontend

- **React:** 18.2.0
- **Vite:** 5.2.0
- **React Router:** 6.23.0
- **Redux:** 5.0.1
- **React Redux:** 9.1.2
- **SASS:** for styling

### Backend

- **Node.js:** 24.x
- **Express:** 4.18.2
- **CORS:** for handling Cross-Origin Resource Sharing
- **Helmet:** for securing HTTP headers
- **Morgan:** for logging HTTP requests
- **Nodemon:** for automatic server restarts during development

## Getting Started

### Prerequisites

- Node.js v24.x or later
- npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/MrNoDrop/react-express-vite.git
    ```
2.  Install backend dependencies:
    ```sh
    cd server
    npm install
    ```
3.  Install frontend dependencies:
    ```sh
    cd ../client
    npm install
    ```

### Development

1.  Start the backend development server:

    ```sh
    cd server
    npm run dev
    ```

    The server will be running on `http://localhost:3000`.

2.  Start the frontend development server:
    ```sh
    cd client
    npm run dev
    ```
    The client will be running on `http://localhost:5173`.

## Project Structure

```
.
├── client/         # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── paths/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   └── vite.config.js
└── server/         # Backend Express application
    ├── bin/
    │   └── www.js
    ├── routes/
    ├── app.js
    └── package.json
```

## Available Scripts

### Client

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the source code.
- `npm run preview`: Starts a local server to preview the production build.

### Server

- `npm run start`: Starts the server in production mode.
- `npm run dev`: Starts the server in development mode with nodemon.

## Deployment

To deploy the application, you need to build the client and then start the server.

1.  Build the client:

    ```sh
    cd client
    npm run build
    ```

    This will create a `dist` directory with the production-ready files.

2.  The Express server is already configured to serve the static files from the `client/dist` directory. You can start the server in production mode:
    `sh
cd server
npm run start
`
    The application will be available at the server's address (e.g., `http://localhost:3000`).
