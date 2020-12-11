'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      webpack: {
        plugins: [
          new MiniCssExtractPlugin({
            filename: 'vendor.css',
          }),
        ],
        module: {
          rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          }],
        },
      },
    },
  });

  return app.toTree();
};
