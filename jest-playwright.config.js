module.exports = {
    preset: 'jest-playwright-preset',
    browsers: ["chromium"],
    launchOptions: {
        headless: false
    },
    testEnvironmentOptions: {
      'jest-playwright': {
        // Options...
      },
    },
  }