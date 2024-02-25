const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4eoa98',
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
