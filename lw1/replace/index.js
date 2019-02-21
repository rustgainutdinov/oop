const fs = require('fs');
const readLine = require('readline');

function errHandler(err) {
  console.log(err.message);
  process.exit();
}

function copyFileWithReplace(inFilePath, outFilePath, searchStr, replaceableStr, cb) {
  const lineReader = readLine.createInterface({
    input: fs.createReadStream(inFilePath)
  });

  lineReader.on('line', (line) => {
    const replaceableLine = line.replace(searchStr, replaceableStr) + '\n';
    try {
      fs.appendFileSync(outFilePath, replaceableLine);
    } catch (e) {
      if (e) errHandler(e);
    }
  });

  lineReader.on('close', cb);
}

if (process.argv.length !== 6) {
  const errMsg = 'Invalid argument count \nUsage: ./replace <inputFile> <outputFile> <searchString> <replacementString>';
  errHandler(new Error(errMsg));
}

const inFilePath = __dirname + '/' + process.argv[2];
const outFilePath = __dirname + '/' + process.argv[3];
const searchStr = process.argv[4];
if (searchStr.length === 0) errHandler(new Error('Search string should not be empty'));
const replaceableStr = process.argv[5];

fs.access(inFilePath, fs.constants.F_OK, err => {
  if (err) errHandler(err);

  fs.writeFile(outFilePath, '', err => {
    if (err) errHandler(err);
    copyFileWithReplace(inFilePath, outFilePath, searchStr, replaceableStr, () => {
      console.log('success');
    });
  });
});
