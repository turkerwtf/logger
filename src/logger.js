const chalk = require("chalk");


const defaultVariable = chalk.gray.bold(

  `[${new Date().toLocaleTimeString()}]:`,

);


function info({ type = "info", message }) {

  console.log(

    `${defaultVariable} ${chalk.blue.bold(`[${type}]:`)} ${chalk.blue(

      message,

    )}`,

  );

}


function error({ type = "error", message }) {

  console.log(

    `${defaultVariable} ${chalk.red.bold(`[${type}]:`)} ${chalk.red(message)}`,

  );

}


function success({ type = "success", message }) {

  console.log(

    `${defaultVariable} ${chalk.green.bold(`[${type}]:`)} ${chalk.green(

      message,

    )}`,

  );

}


function warn({ type = "warn", message }) {

  console.log(

    `${defaultVariable} ${chalk.yellow.bold(`[${type}]:`)} ${chalk.yellow(

      message,

    )}`,

  );

}


function debug({ type = "debug", message }) {

  console.log(

    `${defaultVariable} ${chalk.magenta.bold(`[${type}]:`)} ${chalk.magenta(

      message,

    )}`,

  );

}


module.exports = {

  info,

  error,

  success,

  warn,

  debug,

};
