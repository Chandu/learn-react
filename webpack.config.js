var path = require("path");
module.exports = {
  entry: {
	app: ["./app/main.js"]
  },
  output: {
	path: path.resolve(__dirname, "build"),
	publicPath: "/assets/",
	filename: "bundle.js"
  },
  module: {
		loaders: [
		  {
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
			  presets: ['es2015', 'react']
			}
		  }
		]
	}
};