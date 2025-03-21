import { defineConfig } from 'tsup';
import { baseConfig } from '../../tsup.config.base';

export default defineConfig({
  ...baseConfig,
  entry: ['src/index.ts'],
  external: [
    'react',
    '@emotion/react',
    '@emotion/styled',
  ],
  noExternal: ['@emotion/*'],
  banner: {
    js: '"use client";',
  },
}); 