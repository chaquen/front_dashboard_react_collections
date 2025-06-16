# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

### Prerequisites
- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

### Installation

Due to some dependency conflicts (particularly with google-maps-react), you'll need to use the `--legacy-peer-deps` flag when installing:

```bash
npm install --legacy-peer-deps
```

### Running the Development Server

To start the development server:

```bash
npm run dev
```

The application will be available at:
- Local: http://localhost:5173/rasket_r/
- Network: Check the terminal output for network URLs to access from other devices

### Development Features
- Hot Module Replacement (HMR) enabled
- Automatic recompilation on file changes
- Live preview in browser
- Multi-device testing support through network URLs

To stop the development server, press `Ctrl+C` in the terminal.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint
- `npm run preview` - Preview the production build
- `npm run format` - Format code with Prettier

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
