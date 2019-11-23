const fs = require("fs");
const fileArr = [];
const dir = "./test-files/";
// const dir = "";
var date = new Date();
const month = date.getMonth()+1;
const day = date.getDate();

//gather file names from 'order assets' and push into array
fs.readdirSync(dir).forEach(file => {
    fileArr.push(file);
  });

//loop through files in dir
  for(var i = 0; i < fileArr.length; i++){
    let filePath = dir+fileArr[i];
    fs.stat(`${dir}${fileArr[i]}`, function(err, stats) {
      if(stats.isFile() === true){
        let imgMonth = stats.atime.getMonth()+1;
        let imgDay = stats.atime.getDate();
        console.log(imgMonth);
        console.log(imgDay);
        if(imgMonth === month){return}
        else{
         if(imgDay < day){
          fs.unlinkSync(filePath);
         }
        }
      }
    });
  }
console.log(month + "-" + day);