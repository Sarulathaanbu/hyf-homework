  let myName = "";
  let toDo = [];
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
    if (command.includes("What is my name?")) {
      return `My name is ${myName}`;
    }

    /////////////////Today's Date///////////////
    if (command.includes("What day is it today?")) {
      return (new Date().toDateString());
    }

    ////////////////// ToDoList Exercise////////////////

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

    ////////////////////Basic Math Operations///////////////////
    const calculateArray = command.split(" ");
    const firstNumber = Number(calculateArray[0]);
    const secondNumber = Number(calculateArray[2]);
    const operator = calculateArray[1];
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

    ////////////Timer Setup function calling//////////////////////
    if (command.includes("Set Timer")) {
      return `Timer set for 4 seconds`
    }
    timer()
  }

  ////////////Timer Setup//////////////////////
  function timer() {
    console.log(`Timer done`);
  }
  setTimeout(timer, 6000);


  console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
  console.log(getReply("What is my name?")); // "Your name is Benjamin"
  console.log(getReply("Add fishing to my todo"));
  console.log(getReply("Add workout to my todo"));
  console.log(getReply("Add singing in the shower to my todo"));
  console.log(getReply("What is on my todo?"));
  console.log(getReply("remove fishing from my todo"));
  console.log(getReply("8 * 5"));
  console.log(getReply("Set Timer"));
