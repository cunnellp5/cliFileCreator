#!/usr/bin/env node
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const { askQuestions,askDirQuestion,fileOrDirectory } = require('./questions/filenameQ');

const { init,success } = require('./messages/messages');
const { createFile, createDirectory } = require('./services/create');

const run = async() => {
  let mainanswer;
  init();
  const fileordir = await fileOrDirectory();
  if(fileordir.FILEORDIR === "File") {
    const answers = await askQuestions();
    const { FILENAME, EXTENSION } = answers;
    mainanswer = createFile(FILENAME, EXTENSION);
  } else {
    const answers = await askDirQuestion();
    const { DIR } = answers
    mainanswer = createDirectory(DIR);
  }
  success(mainanswer);
};

run();
