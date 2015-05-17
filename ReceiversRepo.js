_fs = require('fs');

module.exports = {
	getAll : function() {
		var filename = "./receivers.txt";
		var receivers = _fs.readFileSync(filename, "utf8");
		
		return receivers;
	}
}