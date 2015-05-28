_fs = require('fs');

module.exports = {
	getAll : function() {
		var filename = "./receivers.json";
		var file = _fs.readFileSync(filename, "utf8");
		
		return JSON.parse(file);
	}
}