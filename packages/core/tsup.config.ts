import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: [
    'react',
    'react-dom',
    '@emotion/react',
    '@emotion/styled',
    '@pixie-ui/hooks',
    '@pixie-ui/theme',
    '@pixie-ui/utils',
  ],
}); 