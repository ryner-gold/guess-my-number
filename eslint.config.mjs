import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Define which files to lint
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],

    // Configure language options and globals
    languageOptions: {
      globals: {
        ...globals.browser,  // Include all browser globals
        React: "readonly",   // Make React available globally
      }
    },

    // Configure plugins
    plugins: {
      next: nextPlugin
    },

    // Configure specific rules
    rules: {
      // Disable requiring React import since we use Next.js
      "react/react-in-jsx-scope": "off",
      // Enable Next.js core web vitals rules
      "next/core-web-vitals": "error"
    }
  },

  // Include recommended configs from various plugins
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];