import { Shape } from "./shape.js";

class Square extends Shape {
    constructor(input) {
        super(input)
    }
    render() {
        return `<rect width="100" height="100" fill="${this.logoColour}" />`

}}

export { Square };