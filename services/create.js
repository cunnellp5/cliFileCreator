const shell = require("shelljs");

const createFile = (filename, extension) => {
  const filePath = `${process.cwd()}/${filename}.${extension}`
  shell.touch(filePath);
  return filePath;
}

const createDirectory = (dirname) => {
  return shell.mkdir(dirname);
}

module.exports.createFile = createFile;
module.exports.createDirectory = createDirectory;
