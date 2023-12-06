import { Circle } from "../circle";

describe("Circle", () => {
    it("expected to pass color and text validation functions, and render circle string.", () => {
    const circle = new Circle({
        logoText: "tst",
        textColour: "red",
        logoColour: "yellow",
        logoShape: "square",
    });
    expect(circle.render()).toBe(
        `<circle cx="50" cy="50" r="50" fill="yellow" />`
        );
      });
    });
