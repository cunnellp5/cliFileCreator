const inquirer = require("inquirer");

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

const askDirQuestion = () => {
  const question = [{
    name: "DIR",
    type: "input",
    message: "What is the name of the directory?"
  }]
  return inquirer.prompt(question)
}

const fileOrDirectory = () => {
  const question = [
    {
      name: "FILEORDIR",
      type: "list",
      message: "Create a file or directory?",
      choices: ["File", "Directory"],
    }
  ]
  return inquirer.prompt(question);
}

module.exports.askQuestions = askQuestions;
module.exports.askDirQuestion = askDirQuestion;
module.exports.fileOrDirectory = fileOrDirectory;
