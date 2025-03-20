import { defineConfig } from 'tsup';

export const baseConfig = defineConfig({
  format: ['cjs', 'esm'],
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: "node",
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      declaration: true,
      declarationMap: true,
      sourceMap: true,
      removeComments: false,
    },
  },
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  esbuildOptions(options) {
    options.jsx = 'automatic';
    return options;
  },
});
