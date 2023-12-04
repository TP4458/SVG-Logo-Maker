import { Shape } from "./shape";

class Triangle extends Shape {
    constructor(input) {
        super(input)
    }
    render() {
        return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.logoColor}" />`
    }
}

export { Triangle }