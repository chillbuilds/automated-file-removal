const fs = require("fs");
const fileArr = [];
const dir = "Z:/DenyDesigns/print-assets/order-assets/";
var date = new Date();
const month = date.getMonth();
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
        let imgMonth = stats.atime.getMonth();
        let imgDay = stats.atime.getDate();
        if(imgMonth === month){return}
        else{
         if(imgDay < day){
          fs.unlinkSync(filePath);}
        }}
    });}