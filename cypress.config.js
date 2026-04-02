import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    // baseUrl: "http://localhost:5173",
    baseUrl: "https://recipe-app-eight-bay.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
