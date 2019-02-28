var fs = require('fs');
fs.createReadStream('./files/standartIn.txt', {encoding: 'utf8'})
.on('readable', function () {
	var chunk;
	while (chunk = this.read(1)) {
		console.log(chunk);
	}
})
.on('end', function () {
});
