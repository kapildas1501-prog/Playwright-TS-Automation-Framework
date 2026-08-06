import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// Load .env if it exists locally
dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  workers: 3,

  reporter: [
    ["html"],
    [
      "allure-playwright",
      {
        outputFolder: "allure-results",
        detail: true,
        suiteTitle: true,
      },
    ],
  ],

  use: {
    // Fall back to demo URL if process.env.BASE_URL is not set
    baseURL:
    process.env.BASE_URL || "https://opensource-demo.orangehrmlive.com",
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },

  projects: [
    {
      name: "setup",
      testMatch: /auth\.setup\.ts/,
    },

    {
      name: "chrome",

      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.auth/user.json",
      },

      dependencies: ["setup"],
    },

    {
      name: "firefox",

      use: {
        ...devices["Desktop Firefox"],
        storageState: "playwright/.auth/user.json",
      },

      dependencies: ["setup"],
    },
  ],
});
