# HMS-UI

Hospital Management System (HMS) UI is a React.js-based web application designed to manage hospital operations efficiently. This project uses modern tools and libraries to provide a seamless user experience.

---

## Features

- **Dashboard**: Overview of appointments, prescriptions, and calendar.
- **Login**: Secure login for different user roles (Admin, Doctor, Pharmacy, Department).
- **Side Navigation**: Easy navigation to various sections like Dashboard, Out Patients, Prescriptions, and Appointments.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Theming**: Customizable themes using CSS variables.

---

## Tech Stack

- **Frontend**: React.js, Next.js
- **State Management**: Redux Toolkit
- **Styling**: SCSS Modules, PrimeReact components
- **Build Tool**: Next.js
- **Package Manager**: PNPM
- **Backend Integration**: Fastify (for server-side operations)

---

## Folder Structure

````plaintext
.
├── bin/          # Scripts for production preparation
├── docs/         # Documentation and assets
├── src/
│   ├── client/   # Frontend code
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Next.js pages
│   │   ├── store/       # Redux store
│   │   ├── styles/      # Global and component-specific styles
│   ├── server/   # Backend code
│       ├── plugins/     # Fastify plugins
│       ├── routes/      # API routes
├── [package.json](http://_vscodecontentref_/0)         # Project metadata and dependencies
├── [pnpm-lock.yaml](http://_vscodecontentref_/1)       # Lockfile for dependencies
├── [tsconfig.json](http://_vscodecontentref_/2)        # TypeScript configuration

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adyanttech/hms-ui.git
   cd hms-ui

2. Install dependencies:
    ```bash
    yarn install

3. Start the development server:
    ```bash
    yarn dev

4. Open the app in your browser at http://localhost:3000.

## Scripts
    ```bash
    yarn dev: Start the development server.
    yarn build: Build the client and server for production.
    yarn start: Start the production server.
    yarn eslint: Run ESLint for code linting.
    yarn fmt: Format code using Prettier and ESLint.

## Dependencies
    ```bash
    React: ^17.0.2
    Next.js: ^12.0.7
    Redux Toolkit: ^1.9.3
    PrimeReact: ^10.8.2
    Sass: ^1.58.3

## Development
This project uses TypeScript for type safety and SCSS modules for styling. The app is structured to follow best practices for scalability and maintainability.
````
