import { Triangle } from "../triangle";

describe("Triangle", () => {
    it("expected to pass color and text validation functions, and render triangle string.", () => {
        const triangle = new Triangle({
            logoText: "tst",
            textColour: "red",
            logoColour: "yellow",
            logoShape: "square",
        });
        expect(triangle.render()).toBe(
            `<polygon points="100 0, 0 ,0 50, 100" fill="yellow" />`
        );
    });
});

