import { defineConfig } from 'cypress';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  component: {
    devServer: {
      bundler: 'webpack',
      framework: 'angular',
    },
    specPattern: '**/*.cy.ts',
  },
});
