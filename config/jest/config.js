module.exports = {
  rootDir: process.cwd(),
  setupFilesAfterEnv: ['<rootDir>/config/enzyme/setup.js'],
  moduleNameMapper: {
    '\\.less$': 'identity-obj-proxy',
    '^common/(.*)$': '<rootDir>/src/common/$1',
    '^core/(.*)$': '<rootDir>/src/core/$1',
  },
  testMatch: ['<rootDir>/src/**/*.test.js?(x)'],
};
