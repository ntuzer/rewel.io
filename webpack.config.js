//
// var path = require("path");
// module.exports = {
//   context: __dirname,
//   entry: "./frontend/entry.jsx",
//   output: {
//     path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//     filename: "bundle.js"
//   },
//   module: {
//     rules: [
//       {
//         test: [/\.jsx?$/, /\.js?$/],
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['env', 'react']
//         }
//       },
//       {
//         // The important stuff
//         test: /\.(jpg|jpeg|png|ico|gif)(\?.*)?$/, // Load only .jpg .jpeg, and .png files
//         use: {
//           loader: 'file-loader',
//           options: {
//             name: '[name][md5:hash].[ext]', // Name of bundled asset
//             outputPath: '/images/', // Output location for assets. Final: `app/assets/webpack/webpack-assets/`
//             publicPath: '/assets/' // Endpoint asset can be found at on Rails server
//           }
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: [".js", ".jsx", "*"]
//   }
// };

var path = require("path");
var webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  // new UglifyJSPlugin({
  //       uglifyOptions: {
  //         warning: "verbose",
  //         ecma: 6,
  //         beautify: false,
  //         compress: false,
  //         comments: false,
  //         mangle: false,
  //         toplevel: false,
  //         keep_classnames: true,
  //         keep_fnames: true
  //       }
  //     })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

// include plugins config
module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      },
      {
        // The important stuff
        test: /\.(jpg|jpeg|png|ico|gif)(\?.*)?$/, // Load only .jpg .jpeg, and .png files
        use: {
          loader: 'file-loader',
          options: {
            name: '[name][md5:hash].[ext]', // Name of bundled asset
            outputPath: '/images/', // Output location for assets. Final: `app/assets/webpack/webpack-assets/`
            publicPath: '/assets/' // Endpoint asset can be found at on Rails server
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            comments: false
          },
          compress: {
            unsafe_comps: true,
            properties: true,
            keep_fargs: false,
            pure_getters: true,
            collapse_vars: true,
            unsafe: true,
            warnings: false,
            screw_ie8: true,
            sequences: true,
            dead_code: true,
            drop_debugger: true,
            comparisons: true,
            conditionals: true,
            evaluate: true,
            booleans: true,
            loops: true,
            unused: true,
            hoist_funs: true,
            if_return: true,
            join_vars: true,
            cascade: true,
            drop_console: true
          }
        }
      }),
    ]
  }
};
