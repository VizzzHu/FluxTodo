module.exports = {
    // configuration
    entry: {
    	app: './todo.js',
    },
    output: {
    	filename: '[name].js',
    	path: __dirname + '/public',
    	//publicPath: '/',
	},

	module: {
	  loaders: [
	    {
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel', // 'babel-loader' is also a legal name to reference
	      query: {
	        presets: ['react', 'es2015']
	      }
	    }
	  ]
	},

};