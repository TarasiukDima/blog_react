/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import path from "path";

export default {
  globals: { __IS_DEV__: true },
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  rootDir: path.resolve(__dirname, "..", ".."),
  roots: ["<rootDir>src"],
  moduleDirectories: ["<rootDir>src", "node_modules"],
  modulePaths: ["<rootDir>src"],
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
  },
};
