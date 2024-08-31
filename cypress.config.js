const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'dummy_ticket_booking_report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "https://parabank.parasoft.com/parabank/",
  viewportHeight: 960,
  viewportWidth: 1538,
  defaultCommandTimeout: 10000, 
  setupNodeEvents(on, config) {
    // implement node event listeners here
    require('cypress-mochawesome-reporter/plugin')(on);
  },
  },
});
