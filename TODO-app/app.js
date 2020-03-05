// const chalk = require('chalk');
// const yargs = require('yargs');

// const error = chalk.bold.red;
// // const warning = chalk.keyword('orange');
// // const validator = require('validator');

// // console.log(chalk.blue.inverse('Hello world!'));
// // console.log(error('Error!'));
// // console.log(warning('Warning!'));
// // console.log(validator.isEmail('pkmmryh@gmail.com'));

// // console.log(process.argv);
// // console.log(yargs.argv);

// yargs.version('1.1.0');

// yargs.command({
//   command: 'add',
//   describe: 'Adding a new note',
//   builder: {
//     title: {
//       describe: 'Note title'
//     }
//   },
//   handler: argv => {
//     console.log('Adding a new note!', argv);
//   }
// });

// debugger;

// yargs.command({
//   command: 'remove',
//   describe: 'removing a note',
//   builder: {
//     title: {
//       describe: 'Notes title',
//       demandOption: true,
//       type: 'String'
//     },
//     title2: {
//       describe: 'Title2 of Note',
//       demandOption: true,
//       type: 'String'
//     },
//     body: {
//       describe: 'Body of Note',
//       demandOption: true,
//       type: 'String'
//     }
//   },
//   handler: argv => {
//     console.log('Removing a Note!', argv);
//     // console.log('Title is:' + argv.title);
//     // console.log('title2 is:' + argv.title2);
//     // console.log('Body is:' + argv.body);
//   }
// });
// yargs.parse();
// // console.log(yargs.argv); //can be replaced by yargs.parse()

var app = require('express')();
var http = require('http').createServer(app);

app.get('/', function(req, res) {
  res.send('<h1>Hello world, This is Socket.io</h1>');
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
