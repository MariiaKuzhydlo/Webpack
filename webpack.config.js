const path = require('path')
const htmlWebpackPlagin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		filename: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
		clean: true
	},
	devServer: {
		port: 9000,
		compress: true,
		hot: true,
		static: {
			directory: path.join(__dirname, 'dist')
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)s$/i,
				type: 'asset/resourse'
			}
		]
	},
	plugins: [
		new htmlWebpackPlagin({
			title: 'WebpackHW_MariiaKuzhydlo',
			filenema: 'index.html',
			template: 'src/index.html'
		})
	]
}
