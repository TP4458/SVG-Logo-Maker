import { Square } from "../square"

describe("Square", () => {
      it("expected to pass color and text validation functions, and render square string.", () => {
        const square = new Square({
          logoText: "tst",
          textColour: "red",
          logoColour: "yellow",
          logoShape: "square",
        });
        expect(square.render()).toBe(
          `<rect width="100" height="100" fill="yellow" />`
        );
      });
    });