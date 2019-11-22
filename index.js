const fs = require("fs");
const fileArr = [];
const dir = "../test-images/"; //place directory location between quotes
//gather file names from 'order assets' and push into array
fs.readdirSync(dir).forEach(file => {
    fileArr.push(file);
  });
console.log(fileArr);
  for(var i = 1; i < fileArr.length; i++){
    fs.stat(`${dir}${fileArr[i]}`, function(err, stats) {
        if(stats.isFile() === true)
        console.log(stats.atime);
    });
  }