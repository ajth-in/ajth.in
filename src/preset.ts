import { definePreset } from "@pandacss/dev";

export const ajthPreset = definePreset({
  name: "ajth-design-system",

  theme: {
    extend: {
      tokens: {
        colors: {
          neutral: {
            50: { value: "rgb(250 250 250)" },
            100: { value: "rgb(245 245 245)" },
            200: { value: "rgb(229 229 229)" },
            300: { value: "rgb(212 212 212)" },
            400: { value: "rgb(163 163 163)" },
            500: { value: "rgb(115 115 115)" },
            600: { value: "rgb(82 82 82)" },
            700: { value: "rgb(64 64 64)" },
            800: { value: "rgb(38 38 38)" },
            900: { value: "rgb(23 23 23)" },
            950: { value: "rgb(10 10 10)" },
          },
          surface: {
            light: { value: "rgba(0, 0, 0, 0.05)" },
            "light.hover": { value: "rgba(0, 0, 0, 0.1)" },
            "light.subtle": { value: "rgba(0, 0, 0, 0.03)" },
            "light.border": { value: "rgba(0, 0, 0, 0.05)" },
            dark: { value: "rgba(255, 255, 255, 0.05)" },
            "dark.hover": { value: "rgba(255, 255, 255, 0.1)" },
            "dark.subtle": { value: "rgba(255, 255, 255, 0.03)" },
            "dark.border": { value: "rgba(255, 255, 255, 0.1)" },
          },
          accent: {
            green: { value: "rgb(74 222 128)" },
            "green.muted": { value: "rgb(34 197 94)" },
            yellow: { value: "rgb(113 63 18)" },
            "yellow.dark": { value: "rgba(254, 240, 138, 0.8)" },
            emerald: { value: "rgb(6 95 70)" },
            "emerald.light": { value: "rgb(209 250 229)" },
            "emerald.dark.bg": { value: "rgb(6 95 70)" },
            "emerald.dark.text": { value: "rgb(167 243 208)" },
            red: { value: "rgb(239 68 68)" },
          },
          bg: {
            page: { value: "white" },
            "page.dark": { value: "#1c1b1b" },
          },
        },
        fonts: {
          mono: { value: "var(--font-geist-mono), monospace" },
          sans: { value: "var(--font-geist-sans), system-ui, sans-serif" },
        },
        shadows: {
          sm: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
          xl: { value: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
        },
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

      semanticTokens: {
        colors: {
          fg: {
            DEFAULT: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.200}" } },
            muted: { value: { base: "{colors.neutral.600}", _dark: "{colors.neutral.400}" } },
            subtle: { value: { base: "{colors.neutral.500}", _dark: "{colors.neutral.500}" } },
            inverted: { value: { base: "white", _dark: "white" } },
          },
          surface: {
            glass: {
              value: { base: "{colors.surface.light}", _dark: "{colors.surface.dark}" },
            },
            "glass.hover": {
              value: { base: "{colors.surface.light.hover}", _dark: "{colors.surface.dark.hover}" },
            },
            "glass.border": {
              value: { base: "{colors.surface.light.border}", _dark: "{colors.surface.dark.border}" },
            },
            "glass.subtle": {
              value: { base: "{colors.surface.light.subtle}", _dark: "{colors.surface.dark.subtle}" },
            },
            card: {
              value: { base: "{colors.neutral.50}", _dark: "rgba(38, 38, 38, 0.2)" },
            },
            "card.border": {
              value: { base: "{colors.neutral.200}", _dark: "rgba(64, 64, 64, 0.2)" },
            },
            page: {
              value: { base: "white", _dark: "{colors.neutral.800}" },
            },
          },
        },
      },

      textStyles: {
        "heading.page": {
          value: {
            fontSize: "2.25rem",
            fontWeight: "700",
            letterSpacing: "-0.025em",
            lineHeight: "2.5rem",
          },
        },
        "heading.section": {
          value: {
            fontSize: "1rem",
            fontWeight: "500",
          },
        },
        "heading.card": {
          value: {
            fontSize: "1.125rem",
            fontWeight: "600",
            lineHeight: "1.4",
          },
        },
        "body.default": {
          value: {
            fontSize: "0.875rem",
            lineHeight: "1.625",
          },
        },
        "body.sm": {
          value: {
            fontSize: "0.875rem",
          },
        },
        "body.xs": {
          value: {
            fontSize: "0.75rem",
          },
        },
        mono: {
          value: {
            fontFamily: "var(--font-geist-mono), monospace",
            fontVariantNumeric: "tabular-nums",
          },
        },
      },
    },
  },
});
