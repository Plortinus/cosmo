// svelte.config.js
const sveltePreprocess = require('svelte-preprocess');
const production = !process.env.ROLLUP_WATCH;
module.exports = {
  preprocess: sveltePreprocess({
    sourceMap: !production,
    defaults: {
      style: 'less'
    },
    less: {},
    postcss: {
      plugins: [require('autoprefixer')()]
    }
  }),
  // ...other svelte options
  compilerOptions: {
    // enable run-time checks when not in production
    dev: !production,
    customElement: true
  }
};