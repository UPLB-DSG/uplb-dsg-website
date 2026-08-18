import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    rules: {
      "array-callback-return": ["error", { checkForEach: true }],
      curly: ["error", "multi-line", "consistent"],
      eqeqeq: "error",
      "no-alert": "warn",
      "no-console": "warn",
      "no-duplicate-imports": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-wrappers": "error",
      "no-promise-executor-return": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../**"],
              message: "Use the configured @/ aliases for cross-directory imports.",
            },
          ],
        },
      ],
      "no-script-url": "error",
      "no-template-curly-in-string": "error",
      "object-shorthand": "error",
      "prefer-object-spread": "error",
      "prefer-template": "error",
      radix: "error",
      yoda: ["warn", "never", { exceptRange: true }],
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
