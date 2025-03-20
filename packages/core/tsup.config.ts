import { defineConfig } from 'tsup';
import { baseConfig } from '../../tsup.config.base';

export default defineConfig({
  ...baseConfig,
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