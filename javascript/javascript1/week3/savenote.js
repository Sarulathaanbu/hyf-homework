const notes = [];

function saveNote(content, id) {
  let obj = {
    content: content,
    id: id
  }
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      return "Id already id"
    }
  }
  notes.push(obj)
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

//////////////////getNote////////////
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (typeof notes[i].id !== 'number') {
      console.log("Please enter valid id");
      return;
    }
    if (notes[i].id === id) {
      return notes[i];
    }
  }
}
const firstNote = getNote(2);
console.log(firstNote);

///////////////////////////Log out notes////////////////
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
  }
}

logOutNotesFormatted();
