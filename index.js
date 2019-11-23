const fs = require("fs");
const fileArr = [];
const dir = "./test-files/";
// const dir = "";
var date = new Date();
const month = date.getMonth();
const day = date.getDate();

//gather file names from 'order assets' and push into array
fs.readdirSync(dir).forEach(file => {
    fileArr.push(file);
  });

//loop through files in dir
  for(var i = 0; i < fileArr.length; i++){
    fs.stat(`${dir}${fileArr[i]}`, function(err, stats) {
      if(stats.isFile() === true){
        let imgMonth = stats.atime.getMonth();
        let imgDay = stats.atime.getDate();
        if(imgMonth === month){return}
        else{
          
        }
      }
    });
  }
console.log(month + "-" + day);

let expDate = month - 1;
console.log(expDate);

// let expDate = day - 30;
// if(expDate < 1){
//   expDate = expDate - expDate * 2; //format returned expiration date;
// }