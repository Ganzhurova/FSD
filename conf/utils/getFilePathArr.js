const fs = require('fs');
const path = require('path');

module.exports = function getFilePathArr(startPath, filter) {
  let pathsArr = [];

  getFilePath(startPath, filter);

  return pathsArr;

  function getFilePath(startPath, filter) {
    let ext = filter;

    if (!fs.existsSync(startPath)) {
      return;
    }

    let files = fs.readdirSync(startPath); //получить все файлы в каталоге

    for (let i = 0; i < files.length; i += 1) {
      if (files[i] !== 'base') {
        filename = path.join(startPath, files[i]);
        let stat = fs.lstatSync(filename); //получить информацию о файле

        if (stat.isDirectory()) {
          getFilePath(filename, ext);
        } else {
          let extname = path.extname(filename);
          if (extname === filter) {
            pathsArr.push(filename);
          }
        }
      }
    }
  }
};
