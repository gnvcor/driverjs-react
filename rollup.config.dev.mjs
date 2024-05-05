import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace'
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.ts',
  output: {
    name: 'driverJsReact',
    format: 'iife',
    file: 'dist/bundle.js',
    sourcemap: true,
    globals: {
      react: 'React',
    }
  },
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    }),
    commonjs(),
    typescript(),
    serve({
      open: true,
      contentBase: ['dist'],
      host: 'localhost',
      port: 3000,
    }),
    livereload('dist'),
    copy({
      targets: [{ src: 'public/index.html', dest: 'dist' }],
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
}
