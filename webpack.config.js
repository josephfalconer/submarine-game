const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles.css');
const autoPrefixer = require('autoprefixer');

module.exports = {
	entry: './src/js/index.js',
	output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-0'],
				}
			},
			{
				test: /\.scss$/,
				loader: extractCSS.extract({
					fallback: [
						{
							loader: 'style-loader',
							options: {
								sourceMap: true
							}
						}
					],
					use: [
						{
							loader: 'css-loader',
							options: {
								outputStyle: 'compressed',
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => {
									return [autoPrefixer]
								},
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								outputStyle: 'compressed',
								sourceMap: true
							}
						}
					]
				})
			}
		]
	},
	plugins:[
    extractCSS
  ],
};
