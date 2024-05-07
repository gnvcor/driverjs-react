import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: false,
    }
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    }),
    commonjs(),
    typescript(),
    postcss(),
    terser(),
  ],
  external: ['react', 'react-dom'],
}
