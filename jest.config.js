module.exports = {
  globalSetup: './tests/global/Setup.global.js',
  globalTeardown: './tests/global/Teardown.global.js',
  testRunner: "jest-circus/runner",
  testEnvironment: "./tests/utils/PlaywrightEnv.utils",
  testTimeout: 30000,
  verbose: true
}