const webpack = require('webpack');



module.exports = (webpackConfig, env) => {

	const production = env === 'production'

	// console.log(env);
	// console.log(webpackConfig.module.rules[7]);
	// console.log(JSON.stringify(webpackConfig.module.rules[7]));


	return webpackConfig
}
