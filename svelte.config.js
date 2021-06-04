// svelte.config.js
const sveltePreprocess = require('svelte-preprocess');

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
};