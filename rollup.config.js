import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import pkg from './package.json';
import sveltePreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: 'lib/index.js',
  output: [
    { file: pkg.module, 'format': 'es' },
    { file: pkg.main, 'format': 'umd', name }
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        sourceMap: !production,
        defaults: {
          style: 'scss'
        },
        scss: {},
        postcss: {
          plugins: [require('autoprefixer')()]
        }
      }),
      // compile only *.wc.svelte files as web components
      include: /\.wc\.svelte$/,
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
        customElement: true
      }
    }),
    svelte({
      preprocess: sveltePreprocess({
        sourceMap: !production,
        defaults: {
          style: 'scss'
        },
        scss: {},
        postcss: {
          plugins: [require('autoprefixer')()]
        }
      }),
      exclude: /\.wc\.svelte$/,
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production
      }
    }),
    resolve(),
    terser(),
    bundleSize()
  ]
};
