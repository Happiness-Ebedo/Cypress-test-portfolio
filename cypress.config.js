const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  'baseUrl': 'https://www.saucedemo.com', // Candidate
    'supportFile': 'cypress/support/e2e.js',
    "experimentalModifyObstructiveThirdPartyCode": true,
    // "chromeWebSecurity": true
  },
  defaultCommandTimeout: 30000,
  "chromeWebSecurity": false,

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.js'
  }
});
