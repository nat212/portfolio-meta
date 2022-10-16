import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    setupFiles: ['./src/tests/setup-tests.ts'],
    environment: 'jsdom',
    css: true,
  },
})
