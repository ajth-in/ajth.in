import { defineConfig } from "@pandacss/dev";
import { ajthPreset } from "./src/preset";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/preset-panda", ajthPreset],
  include: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "react",
  conditions: {
    extend: {
      dark: 'html[data-theme="dark"] &',
      dataStateActive: "&[data-state=active]",
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
