  let myName = "";
  let toDo = [];

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
    if (command.includes("What day is it today?")) {
      return (new Date().toDateString());
    }
    if (command.includes("Add")) {
      return toDoAdd(command)
    }
    if (command.includes("remove")) {
      return toDoRemove(command)
    }
    if (command.includes("What is on my todo?")) {
      return `you have ${toDo} todos`;
    }
    if (command.includes("*")) {
      return calculate(command)
    }
    if (command.includes("set a timer for"))
    {
        return timer(command);
    }
  }
  ////////////////////Basic Math Operations///////////////////
  function calculate(command) {
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
  }


  ////////////////// ToDoList Exercise////////////////
  function toDoAdd(command) {
    const splitString = command.split(" ");
    var str = splitString.slice(0, -3);
    str.shift();
    let a = str.join(" ");
    toDo = str.push();
    return `${a} added to toDo`;
  }

  function toDoRemove(command) {
    const splitString = command.split(" ");
    var str = splitString.slice(0, -3);
    str.shift();
    let a = str.join(" ");
    toDo = str.push();
    return `${a} removed from your todo`;

  }
  ////////////Timer Setup//////////////////////
  function timer(command)
  {
      const arr = command.split(" ");
      let timer = 0;
      if (arr[arr.length - 1].includes("sec"))
      {
          timer = arr[arr.length - 2] * 1000;
      }
      else if (arr[arr.length - 1].includes("min")) {
          timer = arr[arr.length - 2] * 60000;
      }
      else if (arr[arr.length - 1].includes("hour")) {
          timer = arr[arr.length - 2] * 360000;
      }
      setTimeout(function () {
          console.log ("Timer done!")
      }, timer);
      return `Timer set for ${arr[arr.length-2]} ${arr[arr.length-1]}`;
  }

  console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
  console.log(getReply("What is my name?")); // "Your name is Benjamin"
  console.log(getReply("Add fishing to my todo"));
  console.log(getReply("Add workout to my todo"));
  console.log(getReply("Add singing in the shower to my todo"));
  console.log(getReply("What is on my todo?"));
  console.log(getReply("remove fishing from my todo"));
  console.log(getReply("8 * 5"));
  console.log(getReply("set a timer for 2 minutes"));
