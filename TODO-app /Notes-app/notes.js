const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Some Notes!!!!';
};

// add command
const addnotes = (title, author, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(note => note.title === title);
  const DuplicateNote = notes.find(note => note.title === title);

  if (!DuplicateNote) {
    notes.push({
      title: title,
      author: author,
      body: body
    });
    saveToFile(notes);
    console.log(chalk.yellow.inverse('New note added!!☑️'));
  } else {
    console.log(chalk.grey.inverse('already Taken!🚫'));
  }
};

// remove command to
const removenotes = title => {
  const notes = loadNotes();
  const matchingNote = notes.filter(note => note.title !== title);

  if (matchingNote !== 0 && notes.length > matchingNote.length) {
    console.log(chalk.greenBright.inverse('Found(Note) and Removed !!'));
    saveToFile(matchingNote);
  } else {
    console.log(chalk.red.inverse('Not Found(Note) and Nothing Removed!!'));
  }
};

// list Command
const listNotes = () => {
  const lists = loadNotes();
  console.log(chalk.inverse('List of Notes are: '));
  lists.forEach(list => {
    console.log(
      'Title:' + chalk.red(list.title) + ' Author: ' + chalk.yellow(list.author)
    );
  });
};

//  read Command
const readNotes = title => {
  const notes = loadNotes();
  const titledNotes = notes.find(note => note.title === title);
  if (titledNotes) {
    console.log(chalk.greenBright.inverse('Note Found!'));
    console.log(chalk.red('Title: ' + titledNotes.title));
    console.log(chalk.blue('Body: ' + titledNotes.body));
  } else {
    console.log(chalk.red.inverse('Note Not Found'));
  }
};
//reusable savenotes
const saveToFile = notes => {
  const jsonString = JSON.stringify(notes);
  fs.writeFileSync('data.json', jsonString);
};

//reusable code to loadnotes
const loadNotes = () => {
  try {
    const buffernotes = fs.readFileSync('data.json');
    const buffer_2_JSONstring = buffernotes.toString();
    return JSON.parse(buffer_2_JSONstring);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addnotes: addnotes,
  removenotes: removenotes,
  listNotes: listNotes,
  readNotes: readNotes
};
