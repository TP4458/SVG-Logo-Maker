import isCss3Color from 'is-css3-color';

class Shape {
    constructor ({ logoShape, logoColour, logoText, textColour}) {
        this.logoShape = logoShape;
        this.validateColour(logoColour);
        this.logoColour = logoColour;
        this.validateText(logoText);
        this.logoText = logoText;
        this.validateColour(textColour);
        this.textColour = textColour;
    }
    noInput(input){
        if (!input) throw new Error("Please provide input")
    }
    validateColour(input) {
        this.noInput(input);
        input = input.toLowerCase()
        if(!isCss3Color(input)) {
            throw new Error ("Please provide a valid colour (keyword, hex code of HSL");
        }
    }
    validateText(input) {
        this.noInput(input);
        if (input.length > 3) {
            throw new Error ("Please keep the text at maximum 3 symbols.")
        }
    }
  
}
export { Shape };

