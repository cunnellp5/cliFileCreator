#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("Create a file!", {
        font: "bloody",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
}

const askQuestions = () => {
  const questions = [
    {
      name: "FILENAME",
      type: "input",
      message: "What is the name of the file?"
    },
    {
      type: "list",
      name: "EXTENSION",
      message: "What is the file extension?",
      choices: [".js", ".css", ".html", ".ts", ".md", ".txt"],
      filter: function(val) {
        return val.split(".")[1];
      }
    }
  ];
  return inquirer.prompt(questions);
}

const createFile = (filename, extension) => {
  const filePath = `${process.cwd()}/${filename}.${extension}`
  shell.touch(filePath);
  return filePath;
}

const success = (filepath) => {
  console.log(
    chalk.white.bgGreen.bold(`Done! File Created at ${filepath}`)
  );
};

const run = async() => {
  // show script intro
  init();
  // ask some askQuestions
  const answers = await askQuestions();
  const { FILENAME, EXTENSION } = answers;
  // create the File
  const filePath = createFile(FILENAME, EXTENSION);
  const directoryName = createDi
  // show success message
  success(filePath);
};
console.log(figlet.fontsSync());
run();
