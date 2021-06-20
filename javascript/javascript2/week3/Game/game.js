const input = document.getElementById("input");
const startButton = document.getElementById("startbtn");
const restartButton = document.getElementById("restartbtn");
const sKey = document.getElementById("keys");
const lKey = document.getElementById("keyl");
const getResult = document.getElementById("result")
const getAlert = document.getElementById("alert")
let sCount = 0;
let lCount = 0;

const startGame = () => {

  if (sCount == lCount) {
    getResult.innerHTML = "Game Draw!!!";
  }
  if (sCount > lCount) {
    getResult.innerHTML = "S is the Winner !!!";
  }
  if (lCount > sCount) {
    getResult.innerHTML = "L is the Winner";
  }
};
startButton.addEventListener("click", gameStart);

function gameStart() {
  let getTime = input.value;
  if (getTime == "") {
    getAlert.innerHTML = "Please enter time!!";
    document.removeEventListener("keydown", keyPressFunc);
  }

  setTimeout(() => {
    document.removeEventListener("keydown", keyPressFunc);
    getAlert.innerHTML = "Game Over!!";
    startGame();
  }, getTime * 1000);

  document.addEventListener("keydown", keyPressFunc);

  function keyPressFunc(event) {
    let userKey = event.key;
    if (userKey == "s") {
      sCount++;
      sKey.innerHTML = sCount;
    }
    if (userKey == "l") {
      lCount++;
      lKey.innerHTML = lCount;
    }
  }
}
restartButton.addEventListener("click", function() {
  input.value = "";
  getAlert.innerHTML = "";
  sKey.innerHTML = "";
  lKey.innerHTML = "";
  getResult.innerHTML = "";
  sCount = 0;
  lCount = 0;

});
