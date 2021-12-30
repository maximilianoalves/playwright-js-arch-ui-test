
   module.exports = {
    preset: "jest-playwright-preset",
    setupFilesAfterEnv: [
      './jest.setup.js',
      "jest-allure/dist/setup"
    ],
    "testRunner": "jest-jasmine2",
    reporters: ["default"],
    verbose: true,
  }