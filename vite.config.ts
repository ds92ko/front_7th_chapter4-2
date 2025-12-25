import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { defineConfig as defineTestConfig, mergeConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const baseConfig = {
    base: mode === 'gh-pages' ? '/front_7th_chapter4-2/' : '/',
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            // React와 React-DOM 분리 (가장 먼저 체크)
            if (id.includes('react-dom')) {
              return 'react-dom';
            }
            if (id.includes('react/') || id.includes('react\\')) {
              return 'react';
            }
            // Chakra UI 관련 라이브러리 분리
            if (
              id.includes('@chakra-ui') ||
              id.includes('@emotion') ||
              id.includes('framer-motion')
            ) {
              return 'chakra-ui';
            }
            // DnD Kit 분리
            if (id.includes('@dnd-kit')) {
              return 'dnd-kit';
            }
            // 나머지 node_modules를 vendor로 분리
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      minify: 'esbuild',
      sourcemap: false,
      cssCodeSplit: true,
      assetsInlineLimit: 4096, // 4KB 미만의 작은 파일은 base64로 인라인화
    },
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
