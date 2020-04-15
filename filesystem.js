const fs = require('fs');

fs.writeFile('index.html', "Testing served files from Express", (err)=>{
    if (err) {
        console.log('File not created');
    } else {
        console.log('JavaScript file created successfully');
        fs.readFile('index.html',"utf8", (err, file)=>{
            if (err) {
                console.log(err);
            } else {
                console.log(file);
            }
        });
    }
});

/*function for renaming a created line.
fs.rename('readLines.js', 'readline.js', (err, file)=>{
    
    if (err) {
        console.log('File renaming error');
    } else {
        console.log(' has been renamed successfully');
    }
});

//exporting modules
//module.exports(#module name);
*/