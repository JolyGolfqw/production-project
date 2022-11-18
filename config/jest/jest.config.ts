import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  clearMocks: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ["node_modules"],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
  ],
  modulePaths: ["<rootDir>/src"],
  // rootDir: "../../../",
  rootDir: "../../",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/fileMock.tsx',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};

export default jestConfig;
