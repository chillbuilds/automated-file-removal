const fs = require("fs");
const moment = require("moment");
const fileArr = [];
const dir = "./test-files/";
// const dir = `C:/Users/Master William/Pictures/`;
const time = moment().format();
const monthAgo = moment().subtract(30, 'days').format();

//gather file names from 'order assets' and push into array
fs.readdirSync(dir).forEach(file => {
    fileArr.push(file);
  });
  
//loop through files in dir
  for(var i = 0; i < fileArr.length; i++){
      let x = fileArr[i];
    fs.stat(`${dir}${fileArr[i]}`, function(err, stats, i) {
        if(stats.isFile() === true){
        console.log(stats.atime);
        console.log(x);
    }
        //stats.atime
    });
  }

console.log(time)
console.log(monthAgo);