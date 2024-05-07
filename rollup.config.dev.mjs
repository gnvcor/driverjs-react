import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace'
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'example/index.tsx',
  output: {
    name: 'driverJsReactExample',
    format: 'iife',
    file: 'dist-example/bundle.js',
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
      contentBase: ['dist-example'],
      host: 'localhost',
      port: 4000,
    }),
    livereload({
      watch: 'dist-example',
    }),
    copy({
      targets: [{ src: 'public/index.html', dest: 'dist-example' }],
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    postcss(),
  ]
}
