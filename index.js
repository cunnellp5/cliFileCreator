#!/usr/bin/env node

// const inquirer = require("inquirer");
// const chalk = require("chalk");
// const figlet = require("figlet");
// const shell = require("shelljs");
const { askQuestions,askDirQuestion,fileOrDirectory } = require('./questions/filenameQ');
const { init,success,warn } = require('./messages/messages');
const { createFile, createDirectory } = require('./services/create');

const run = async() => {
  let mainanswer;
  let answers
  init();
  const { FILEORDIR } = await fileOrDirectory();

  switch (FILEORDIR) {
    case 'File':
        answers = await askQuestions();
        const { FILENAME, EXTENSION } = answers;
        mainanswer = createFile(FILENAME, EXTENSION);
      break;
    case 'Directory':
      answers = await askDirQuestion();
      const { DIR } = answers
      mainanswer = createDirectory(DIR);
      break;
  default:
    warn();
  }
  success(mainanswer);
};

run();
