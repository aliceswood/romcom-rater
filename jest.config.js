const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
})
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true,
  setupFiles: [
    '<rootDir>/text-encoder.mock.js',
  ],
};

module.exports = createJestConfig(customJestConfig)