  let myName = "";
  ////////////Adding name////////////////////
  function getReply(command) {

    if (command.includes("Hello my name is")) {
      let strList = command.split(' ')

      if (myName == " ") {
        return 'Enter your name'
      }
      myName = strList[4];
      return `Nice to meet you ${myName}`

    }
    if (command == "What is my name?") {
      return `My name is ${myName}`;
    }

    /////////////////Today's Date///////////////
    if (command == "What day is it today?") {
      return (new Date().toDateString());
    }
  }
  ////////////////// ToDoList Exercise////////////////
  let toDo = [];

  function toDoList(command) {
    const splitString = command.split(" ");
    var str = splitString.slice(0, -3)
    str.shift()
    let a = str.join(' ')
    toDo = str.push()
    if (command.includes("to my todo")) {
      return `${a} added to toDo`;
    }
    if (command.includes("from my todo")) {
      return `${a} removed from your todo`;
    }
    if (command.includes("What is on my todo?")) {
      return `you have ${toDo} todos`;
    }
  }

  ////////////////////Basic Math Operations///////////////////
  function calculate(firstNumber, secondNumber, operator) {

    if (operator == "*") {
      return firstNumber * secondNumber;
    }
    if (operator == "/") {
      return firstNumber / secondNumber;
    }
    if (operator == "+") {
      return firstNumber + secondNumber;
    }
    if (operator == "-") {
      return firstNumber - secondNumber;
    }
  }
  ////////////Timer Setup//////////////////////
  function timer() {
    console.log(`Timer done`);
  }
  setTimeout(timer, 6000);
  
  console.log("Timer set for 1 minute");
  console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
  console.log(getReply("What is my name?")); // "Your name is Benjamin"
  console.log(toDoList("Add fishing to my todo"));
  console.log(toDoList("Add workout to my todo"));
  console.log(toDoList("Add singing in the shower to my todo"));
  console.log(toDoList("What is on my todo?"));
  console.log(toDoList("remove fishing from my todo"));
  console.log(calculate(29, 20, "-"));
