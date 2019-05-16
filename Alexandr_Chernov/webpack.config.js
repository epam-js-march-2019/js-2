const path = require("path");

module.exports = {
	entry: './src/main.js',

	devtool: 'source-map',

	output: {
		path: path.resolve(__dirname, "public/js/"),
		filename: "script.min.js"
	},
	
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /(node_modules)/
			}
		]
	}
};