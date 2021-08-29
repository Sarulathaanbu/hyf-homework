// Paint a circle to a canvas element
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle,
      ctx.fillStyle = this.fillColor);
    ctx.stroke();
    ctx.fill();
  }
}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
console.log(c1.draw());
const canvas = document.getElementById("boop");
const con = canvas.getContext("2d");

function changePosition() {

  const circleWidth = Math.floor(Math.random() * window.screen.width);
  const circleHeight = Math.floor(Math.random() * window.screen.height);
  const circleRadius = Math.floor(Math.random() * 100);
  con.beginPath();
  con.arc(circleWidth, circleHeight, circleRadius, 0, 2 * Math.PI);
  con.stroke();
}
changePosition();
document.getElementById("myButton").addEventListener("click", changePosition);
