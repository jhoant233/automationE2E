const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',       // Directory where reports will be saved
    overwrite: false,
    html: false,                        // Generar archivos HTML directamente
    json: true,                         // Generar archivos JSON
  },
  defaultCommandTimeout: 20000,// set the default time to wait for elements
  video: false,//video recording is cancelled
  viewportWidth: 1500,//set screen width when running tests
  viewportHeight: 800,//set screen height when running tests
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
