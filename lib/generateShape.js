//this data will pass to renderSVG

import { Circle } from "./circle";
import { Square } from "./square";
import { Triangle } from "./trinagle";

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

export { genShape };