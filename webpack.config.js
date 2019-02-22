const path = require('path');
module.exports = {
	entry:{
		path:path.resolve(__dirname,'./src/index.js'),
	},
	output:{
		path:path.resolve(__dirname,'./build'),
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				 query:{
                    presets:['es2015','react','stage-0'] 
                }
			}
		]
	},
	mode:'development',
	devServer:{}



}