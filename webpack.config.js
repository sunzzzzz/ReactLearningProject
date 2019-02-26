const path = require('path');
module.exports = {
	entry:['webpack/hot/dev-server',path.resolve(__dirname,'./src/index.js')],
	output:{
		path:path.resolve(__dirname,'./build'),
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader'
			},

		]
	},
	mode:'development',
	devtool:'source-map',
	devServer:{
		inline:true,
		port:3000
	}
	



}