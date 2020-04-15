const fs = require('fs');
const zlib = require('zlib');

//for compressing data into a text file.
const glib = zlib.createGzip();
const readStream = fs.createReadStream('./readline.txt', 'utf8');
const writeStream = fs.createWriteStream('./write.txt.gz');
readStream.pipe(glib).pipe(writeStream);

//for decompressing the compressed file.
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./write.txt.gz');
const writeStream = fs.createWriteStream('./uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);
