var Waterline=require('waterline');
module.exports=Waterline.Collection.extend({
	identity:'bear',// 模型名，默认对应表名
	connection:'myLocalMysql',
	schema:true,
	attributes:{
		name:'string'
	}
});