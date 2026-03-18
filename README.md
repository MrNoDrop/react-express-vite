# React Express Template (2026 Modernized Edition)

A full-stack application template using React for the frontend and Express for the backend, modernized with the latest technologies for 2026.

## Features

- **Modern Frontend:** Powered by React 18 and Vite for a fast and efficient development experience.
- **Robust Backend:** Built with Express.js, a minimal and flexible Node.js web application framework.
- **ES Modules:** The entire backend is written using ES modules, the modern standard for JavaScript.
- **State Management:** Includes Redux for predictable state management, with a clear and scalable structure for actions and listeners.
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

### Environment Variables

To configure environment-specific settings (like ports, database URIs, or secret keys):

1.  In the `server` directory, create a `.env` file based on the example:
    ```sh
    cd server
    cp .env.example .env
    ```
2.  Update the variables inside `server/.env` as needed.

The Vite frontend natively supports environment variables out of the box. You can create a `.env` file in the `client` directory. Any variables that need to be accessible in your React code must be prefixed with `VITE_` (e.g., `VITE_API_URL`).

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
│   │   ├── favicon.ico
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   └── menu.jsx
│   │   ├── core/
│   │   │   ├── api.js      # Standardized fetch utility wrapper
│   │   │   ├── browserHistory.js
│   │   │   ├── reportWebVitals.js
│   │   │   └── setupTests.js
│   │   ├── paths/
│   │   │   ├── path/
│   │   │   │   └── landingPage.js
│   │   │   └── paths.jsx
│   │   ├── store/
│   │   │   ├── actions/
│   │   │   │   ├── window/
│   │   │   │   │   └── resized.js
│   │   │   │   ├── types.js
│   │   │   │   └── updateTick.js
│   │   │   ├── listeners/
│   │   │   |   ├──  listener/
│   │   │   │   │   ├── authentication/
│   │   │   │   │   │   ├── fingerprint.js
│   │   │   │   │   │   └── token.js
│   │   │   │   │   ├── history.js
│   │   │   │   │   ├── updateTick.js
│   │   │   │   │   └── window.js
│   │   │   │   └── index.js
│   │   │   ├── index.js
│   │   │   ├── initial.state.json
│   │   │   └── reducers.js
│   │   ├── tools/
│   │   │   ├── getBoundingClientRect.js
│   │   │   └── vScale.js
│   │   ├── App.jsx
│   │   ├── App.scss
│   │   ├── App.test.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   ├── .env.example
│   └── index.html
│   ├── package-lock.json
│   └── vite.config.js
├── server/         # Backend Express application
|   ├── bin/
|   │   └── www.js
|   ├── routes/
|   │   └── index.js
|   ├── .env.example
|   ├── app.js
|   ├── db.js           # Database connection logic
|   ├── package-lock.json
|   └── package.json
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

### Database Setup

The backend includes a boilerplate database connection file at `server/db.js`. It ensures the database (e.g., MongoDB, PostgreSQL) is connected via the `DATABASE_URL` environment variable before the server starts accepting HTTP requests.

### API Requests

A standardized fetch utility is provided for the frontend in `client/src/core/api.js`. It automatically hooks into `VITE_API_URL` (or the Vite dev proxy).

```javascript
import { apiFetch } from "./core/api";

// Automatically hits /api/users in dev, or VITE_API_URL/users in prod
apiFetch("/users", { method: "GET" }).then((data) => console.log(data));
```

## State Management with Redux

This template uses Redux for state management, with a specific structure for actions and listeners.

### Store Actions

Actions are events that send data from your application to your Redux store. They are plain JavaScript objects and are the only source of information for the store.

**Creating a new action:**

1.  **Define the action type:** In `client/src/store/actions/types.js`, add a new export for your action type. This should be a constant string.

    ```javascript
    // client/src/store/actions/types.js
    export const MY_NEW_ACTION = "MY_NEW_ACTION";

    export default [
      // ...other actions
      MY_NEW_ACTION,
    ];
    ```

2.  **Create the action creator:** In the `client/src/store/actions/` directory, create a new file for your action (e.g., `myNewAction.js`). This file will export a function that returns the action object.

    ```javascript
    // client/src/store/actions/myNewAction.js
    import { MY_NEW_ACTION } from "./types";

    export default (payload) => ({
      type: MY_NEW_ACTION,
      payload: payload,
    });
    ```

### Store Listeners

Listeners are functions that are executed when the store's state changes. They are useful for triggering side effects, such as API calls or other asynchronous operations.

**Creating a new listener:**

1.  **Create the listener file:** In the `client/src/store/listeners/listener/` directory, create a new file for your listener (e.g., `myNewListener.js`). This file will export a function that takes the store as an argument.

    ```javascript
    // client/src/store/listeners/listener/myNewListener.js
    import myNewAction from "../../actions/myNewAction";

    export default ({ getState, dispatch }) => {
      const {
        state: { someValue },
      } = getState();

      if (someValue === "some condition") {
        dispatch(myNewAction({ newValue: "new value" }));
      }
    };
    ```

2.  **Bind the listener:** In `client/src/store/listeners/index.js`, import your new listener and call it within the exported function.

    ```javascript
    // client/src/store/listeners/index.js
    import bindMyNewListener from "./listener/myNewListener";
    // ...other imports

    export default (store) => {
      // ...other listeners
      bindMyNewListener(store);
    };
    ```

    You can also use a `setInterval` loop to run a listener at a specific interval:

    ```javascript
    // client/src/store/listeners/index.js
    // ...
    const loop = setInterval;

    export default (store) => {
      // ...
      loop(() => {
        bindMyNewListener(store);
      }, 1000); // Run every second
    };
    ```

### Forcing Re-renders with `updateTick`

The `updateTick` state property is a simple counter that increments periodically. While generally you should rely on changes to props and state to trigger re-renders in your components, `updateTick` provides a mechanism to force a re-render when needed. This can be particularly useful for scenarios where you need to re-evaluate a `useEffect` hook based on a time interval or to manually trigger an update.

**Example: Using `updateTick` in `useEffect`**

Imagine you have a component that needs to perform an action on a regular interval. You can use `updateTick` in the dependency array of a `useEffect` hook to trigger the effect whenever the tick updates.

```javascript
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const MyComponent = () => {
  const updateTick = useSelector((state) => state.state.updateTick);

  useEffect(() => {
    // This effect will run every time updateTick changes,
    // which happens on a regular interval.
    console.log("Component re-rendered due to updateTick:", updateTick);

    // You can add any logic here that needs to be re-evaluated,
    // such as fetching data or updating the component's state.
  }, [updateTick]);

  return <div>My Component</div>;
};

export default MyComponent;
```

**Caution:** Forcing re-renders should be used sparingly. Always consider if there's a more declarative, state-driven way to achieve your goal. However, `updateTick` is a useful tool for cases where a periodic or manual re-render is the most straightforward solution.

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
    ```sh
    cd server
    npm run start
    ```
    The application will be available at the server's address (e.g., `http://localhost:3000`).
