//this data will pass to renderSVG

import { Circle } from "./circle.js"
import { Square } from "./square.js"
import { Triangle }from "./triangle.js"

const genShape = (data) => {
    const { logoShape } = data;
    switch (logoShape) {
        case "circle":
            const genCircle = new Circle(data);
            return genCircle;
            break;
        case "square":
            const genSquare = new Square(data);
            return genSquare;
            break;
        case "triangle":
            const genTriangle = new Triangle(data);
            return genTriangle;
            break;
    }
}
// console.log(genShape)
export { genShape };