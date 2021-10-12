console.log("inside warmup file");
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
    getCircumference() {
        return Math.PI * this.radius * this.radius;
    }
    getArea() {
        return Math.PI * this.radius;
    }
}

const circle1 = new Circle(10);

console.log(
    `Circle1 Diameter: ${circle1.getDiameter()}, Circumference: ${circle1.getCircumference()}, Area: ${circle1.getArea()}`
);