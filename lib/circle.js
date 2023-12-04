import { Shape } from "./shape.js";

class Circle extends Shape {
    constructor(input) {
    super(input)
    }
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.logoColor}" />`;
      }
}

export { Circle }