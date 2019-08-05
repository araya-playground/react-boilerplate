const { defaults } = require('jest-config');

module.exports = {
  ...defaults,
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>tests/test-setup.js'],
};
