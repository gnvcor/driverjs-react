module.exports = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./setupTests.ts']
};
