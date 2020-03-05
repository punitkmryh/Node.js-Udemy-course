const chalk = require('chalk');
const NotesUtil = require('./notes.js');
const yargs = require('yargs');

// console.log('hello');

//// module=>1
const greetings = chalk.red.inverse.bold('success!');
// console.log(greetings);

//// module=>3
// console.log('list of strings given:', process.argv);
// console.log('1st string(default):', process.argv[0]);
// console.log('2nd string(default):', process.argv[1]);
// console.log('3rd string(Argument passed):', process.argv[2]);

// // Creaitng custom command operation from user input

// const coustom_command = process.argv[2];

// if (coustom_command === 'add') {
//   console.log('Add Command: Addding notes');
// } else if (coustom_command === 'remove') {
//   console.log('Remove Command: Removing notes');
// }

// Module->4
//parsing commands using y-args(version of process)
yargs.version('1.1.0');

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Notes title',
      demandOption: true,
      type: 'string'
    },
    author: {
      describe: 'Author of notes',
      type: 'string'
    },
    body: {
      describe: 'Body of notes',
      type: 'string'
    }
  },
  handler(argv) {
    //handler is performs operation of command specified
    NotesUtil.addnotes(argv.title, argv.author, argv.body); //sending commands to notesutil
    const titlebox1 = chalk.blue.inverse(argv.title);
    const author1 = chalk.green.inverse(argv.author);
    const body = chalk.red.inverse(argv.body);
    console.log('new Notes: ' + titlebox1);
    console.log('Author : ' + author1);
    console.log('Body : ' + body);
  }
});

//remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Notes name',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    NotesUtil.removenotes(argv.title);
    const titlebox2 = chalk.red(argv.title);
    //console.log('Removed note form repository: ' + titlebox2);
  }
});

// read command
yargs.command({
  command: 'read',
  describe: 'reads from notes',
  builder: {
    title: {
      describe: 'notes title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    NotesUtil.readNotes(argv.title);
    // const titlebox = chalk.white.inverse(argv.title);
    // console.log('Read note: ' + titlebox);
  }
});

// List Command
yargs.command({
  command: 'list',
  describe: 'Listing all the notes',
  handler(argv) {
    NotesUtil.listNotes();
  }
});
// console.log(yargs.argv); // this line of code must be always at end
yargs.parse(); // above line can be replaced by this line of code
