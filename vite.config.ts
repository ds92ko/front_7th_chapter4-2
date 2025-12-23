import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { defineConfig as defineTestConfig, mergeConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const baseConfig = {
    base: mode === 'gh-pages' ? '/front_7th_chapter4-2/' : '/',
    plugins: [react()],
  };

  return mergeConfig(
    baseConfig,
    defineTestConfig({
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        coverage: {
          reportsDirectory: './.coverage',
          reporter: ['lcov', 'json', 'json-summary'],
        },
      },
    }),
  );
});
