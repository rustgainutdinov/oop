var fs = require('fs');
const num = 'ac';
console.log(Buffer.from(num, 'hex').toString('utf8'));

// fs.open('files/english.txt', 'r', function (status, fd) {
// 	if (status) {
// 		console.log(status.message);
// 		return;
// 	}
// 	var buffer = Buffer.alloc(1);
// 	var i = 0;
// 	while (fs.readSync(fd, buffer, 0, 1, i)) {
// 		console.log(parseInt(buffer.toString('hex'), 16));
// 		i++;
// 	}
// });

// fs.createReadStream('files/rekviem.txt')
// .on('readable', function () {
// 	var buffer = Buffer.alloc(1);
// 	while (this.read(0, buffer, 0, 1, 0)) {
// 		console.log(buffer);
// 	}
// })
// .on('end', function () {
// });
