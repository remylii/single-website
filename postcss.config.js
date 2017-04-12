// ctx: contents has `env`, `file`, `options`
module.exports = ctx => ({
  map: ctx.env === 'development' ? 'inline' : false,
  plugins: {
    'postcss-smart-import': {
      "plugins": [
        require('stylelint'),
      ]
    },
    'autoprefixer': {},
    'postcss-nested': {},
    'postcss-sorting': {},
    'cssnano': ctx.env === 'production' ? {} : false,
    'postcss-reporter': { clearMessages: true }
  }
})
