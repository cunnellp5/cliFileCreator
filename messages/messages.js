const chalk = require("chalk");
const figlet = require("figlet");

init = () => {
  console.log(
    chalk.red.underline(
      figlet.textSync(".Philthy.", {
        font: "bloody",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
}

success = (path) => {
  console.log(
    chalk.black.bgCyan.bold(`Done! Created ${path}`)
  );
};

warn = () => {
  console.log(
    chalk.black.bgRed.bold(`uh oh`)
  );
}


module.exports.init = init;
module.exports.success = success;
