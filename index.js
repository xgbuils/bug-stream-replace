var fs = require('fs')
var sr = require('stream-replace')
var basename = require('path').basename

var file = process.argv[2] || 'large.txt'

var input  = fs.createReadStream(file)
var output = fs.createWriteStream('output-' + basename(file))

input
  .pipe(sr(/\$.*\$/, 'U'))
  .pipe(output)


