import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ["node_modules"],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
  ],
  // rootDir: "../../../",
  rootDir: "../../",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
}

export default jestConfig
