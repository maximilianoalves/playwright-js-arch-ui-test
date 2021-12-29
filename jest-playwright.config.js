module.exports = {
    preset: 'jest-playwright-preset',
    browsers: ["chromium"],
    reporters: ["jest-playwright-allure"],
    defaultViewport: null,
    launchOptions: {
        headless: false,
    },
    testEnvironmentOptions: {
      'jest-playwright': {
      },
    },
  }