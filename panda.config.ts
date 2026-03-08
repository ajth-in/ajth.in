import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "react",
  conditions: {
    extend: {
      dark: "@media (prefers-color-scheme: dark)",
      dataStateActive: "&[data-state=active]",
    },
  },
  theme: {
    extend: {
      tokens: {
        radii: {
          sm: { value: "calc(0.625rem - 4px)" },
          md: { value: "calc(0.625rem - 2px)" },
          lg: { value: "0.625rem" },
          xl: { value: "calc(0.625rem + 4px)" },
          "2xl": { value: "calc(0.625rem + 8px)" },
          "3xl": { value: "calc(0.625rem + 12px)" },
          "4xl": { value: "calc(0.625rem + 16px)" },
        },
      },
    },
  },
  globalCss: {
    "::selection": {
      backgroundColor: "rgb(255, 255, 255)",
      color: "#000000",
    },
    html: {
      minWidth: "360px",
    },
    ".title": {
      textWrap: "balance",
    },
    "pre::-webkit-scrollbar": {
      display: "none",
    },
    pre: {
      msOverflowStyle: "none",
      scrollbarWidth: "none",
    },
    'input[type="text"], input[type="email"]': {
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
    },
    table: {
      display: "block",
      maxWidth: "fit-content",
      overflowX: "auto",
      whiteSpace: "nowrap",
    },
  },
});
