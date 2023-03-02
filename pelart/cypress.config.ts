import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'b8diio',
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
