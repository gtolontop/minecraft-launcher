module.exports = {
  roots: ['<rootDir>/tests', '<rootDir>/renderer/tests'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};
