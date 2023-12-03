import { Shape } from "./shape";

class Square extends Shape {
    constructor(input) {
        super(input)
    }
    render() {
        return `<rect width="100" height="100" />`

}}

export { Square };