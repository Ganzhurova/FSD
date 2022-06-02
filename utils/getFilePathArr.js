const fs = require('fs');
const path = require('path');

module.exports = function getFilePathArr(initialPath, fileExt) {
  const pathsArr = [];

  function getFilePath(startPath, filter) {
    const ext = filter;

    if (!fs.existsSync(startPath)) {
      return;
    }

    const files = fs.readdirSync(startPath); // получить все файлы в каталоге

    for (let i = 0; i < files.length; i += 1) {
      if (files[i] !== 'base') {
        const filename = path.join(startPath, files[i]);
        const stat = fs.lstatSync(filename); // получить информацию о файле

        if (stat.isDirectory()) {
          getFilePath(filename, ext);
        } else {
          const extname = path.extname(filename);
          if (extname === filter) {
            pathsArr.push(filename);
          }
        }
      }
    }
  }

  getFilePath(initialPath, fileExt);

  return pathsArr;
};
