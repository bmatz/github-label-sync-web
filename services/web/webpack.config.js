const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
let plugins = [
	hotModuleReplacementPlugin,
	new webpack.LoaderOptionsPlugin({
		options: {
			postcss: () => [autoprefixer, flexbugsFixes],
			sassLoader: {
				includePaths: [
					path.join(__dirname, 'client'),
					path.join(__dirname, 'node_modules'),
				],
			},
			debug: true,
			pathinfo: true,
		},
	}),
];

const isProduction = process.env.NODE_ENV === 'production';

let globalStyleLoader = { test: /global.scss/, use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader', 'sass-loader'] };
let styleLoader = {
	test: /\.(scss|sass)?$/,
	exclude: /global.scss/,
	use: ['style-loader', 'css-loader?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
		'postcss-loader', 'sass-loader'],
};
const publicPath = '/';

if (isProduction) {
	// publicPath = 'http://0.0.0.0:3101/';
	plugins = []; // remove hot replacement for production
	globalStyleLoader = { test: /global.scss/, loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader']) };
	styleLoader = {
		test: /\.(scss|sass)?$/,
		exclude: /global.scss/,
		loader: ExtractTextPlugin.extract(['css-loader?camelCase&modules&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader', 'sass-loader']),
	};
	// production plugins
	plugins.push(new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
	}));
	plugins.push(new webpack.LoaderOptionsPlugin({
		minimize: true,
		debug: false,
		options: {
			postcss: () => [autoprefixer, flexbugsFixes],
			sassLoader: {
				includePaths: [
					path.join(__dirname, 'client'),
					path.join(__dirname, 'node_modules'),
				],
			},
		},
	}));

	plugins.push(new ExtractTextPlugin({
		filename: 'style.css',
		disable: false,
		allChunks: true,
	}));
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		sourceMap: true,
		beautify: false,
		mangle: {
			screw_ie8: true,
			keep_fnames: true,
		},
		compress: {
			screw_ie8: true,
		},
		comments: false,
	}));
}

const devServer = {
	hot: true,
	inline: true,
	open: false,
	// progress: true,
	host: process.env.WEBPACK_HOST || '0.0.0.0',
	port: 5000,
	historyApiFallback: {
		disableDotRule: true,
		index: '/src/index.dev.html',
	},
	proxy: {
		'/api/**': {
			target: 'http://localhost:3000',
			pathRewrite: { '^/api': '' },
			secure: true,
		},
	},
	quiet: false,
	noInfo: false,
	stats: { colors: true },
};

const config = {
	entry: {
		app: ['./src/main.jsx'],
		// tachyons: './node_modules/tachyons/css/tachyons.css',
		// index: './src/css/index.css',
	},
	devtool: isProduction ? 'cheap-module-source-map' : 'eval',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath,
		filename: 'bundle.js',
		library: '[name]_[hash]',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{ test: /\.jsx?$/, enforce: 'pre', loader: 'eslint-loader', exclude: /node_modules/ },
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					babelrc: false,
					presets: [
						['es2015', { modules: false }],
						'react',
					],
					plugins: [
						'transform-regenerator',
						['transform-object-rest-spread', { useBuiltIns: true }],
						'transform-runtime',
						'transform-class-properties',
					],
				},

			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { minimize: true },
					},
				],
			},
			globalStyleLoader,
			styleLoader,
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
			{ test: /\.(ico|png|jpg)$/, loader: 'file-loader?name=[name].[ext]' },
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
	},
	plugins: [
		...plugins,
	],
};

if (!isProduction) {
	config.devServer = devServer;
}

module.exports = config;
