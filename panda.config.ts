import { defineConfig, defineRecipe, defineTokens } from "@pandacss/dev";
import { tokens } from "./theme";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}"],

  // Output react components
  jsxFramework: "react",

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
      // tokens: defineTokens({ // -- THIS WORKS!
      //   colors: {
      //     heavy: { value: "blue" },
      //     light: { value: "red" },
      //   },
      // }),
      recipes: {
        heading: defineRecipe({
          name: "heading",
          base: {},
          variants: {
            size: {
              large: { fontSize: "4xl" },
              small: { fontSize: "xl" },
            },
          },
        }),
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
