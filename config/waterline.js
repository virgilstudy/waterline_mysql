var mysqlAdapter=require('sails-mysql');
var wlconfig={
	adapters:{
		'default':mysqlAdapter,
		mysql:mysqlAdapter
	},
	connections:{
		myLocalMysql:{
			adapter:'mysql',
			host:'localhost',
			port:3306,
			user:'root',
			password:'virgil14721004',
			database:'wlmysql'
		}
	},
	defaults:{
		migrate:'safe'
	}
}
exports.config=wlconfig;