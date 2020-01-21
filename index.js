const fs = require("fs");
const fileArr = [];
const dir = "Y:/Artists/Artist_Originals/";
var date = new Date();
const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();
var arr = [];
var statsArr = [];

console.log("day: "+day);
console.log("month: "+month);
//gather file names from 'order assets' and push into array
fs.readdirSync(dir).forEach(file => {
    fileArr.push(file);
  });
//loop through files in dir
  for(var i = 0; i < fileArr.length; i++){
    let filePath = dir+fileArr[i];
    let stats = fs.statSync(`${dir}${fileArr[i]}`);
      if(stats.isFile() === true && fileArr[i] !== "Thumbs.db"){
        let obj = {location: filePath, stats: stats};
        statsArr.push(obj);
      }}
      
let yearPurge = [];

      for(var i = 0; i < statsArr.length; i++){
        let imgMonth = statsArr[i].stats.atime.getMonth();
        let imgDay = statsArr[i].stats.atime.getDate();
        let imgYear = statsArr[i].stats.atime.getFullYear();
        if(imgYear < year && imgDay < day){
          fs.unlinkSync(statsArr[i].location);
          return;
        }
        if(imgMonth < month && imgDay < day){
          if(imgMonth === month){return};
          fs.unlinkSync(statsArr[i].location);
        }
      }