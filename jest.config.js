module.exports = {
  timers: 'fake',
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testMatch: ['**/src/**/test.ts*'],
  collectCoverageFrom: [
    '**/src/components/**',
    '**/src/hooks/**'
  ]
}
