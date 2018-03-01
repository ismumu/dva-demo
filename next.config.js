

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');


module.exports = {
	webpack(config, options) {

		// console.log(config);

		const { dev, isServer } = options;

		const extractCSSPlugin = new ExtractTextPlugin({
			filename: '/static/style.css',
			disable: dev,
		})

		config.module.rules.push({
			test: /\.css$/,
			use: cssLoaderConfig(
				config,
				extractCSSPlugin, {
					cssModules: true,
					cssLoaderOptions: {
						importLoaders: 1,
						localIdentName: "[local]___[hash:base64:5]",
					},
					dev,
					isServer
				}
			)
		})

		config.plugins.push(extractCSSPlugin);

		console.log('----config----')
		console.log(config)
		return config
	}
}
