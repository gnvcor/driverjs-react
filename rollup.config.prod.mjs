import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    sourcemap: false,
  },
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    }),
    commonjs(),
    typescript(),
    terser(),
  ],
  external: ['react', 'react-dom'],
}
