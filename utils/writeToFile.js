const fs = require("fs");


function writeToFile(fileName, content){
    fs.writeFile(fileName, content, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('File written successfully')
    }
  });
  
  }

  module.exports = writeToFile;
  