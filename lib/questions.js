const questions = [
    {
        type: "list",
        name: "logoShape",
        message: "Select the shape of your logo:",
        choices: ["square", "circle", "triangle"] 
    },
    {
        type: "input",
        name: "logoColour",
        message: "Enter the colour of your logo's shape, using either a keyword(e.g. Blue), hex code (e.g. #0000FF), or HSL colour values(e.g. hsl(240, 100%, 50%))."
    },
    {
        type: "input",
        name: "logoText",
        message: "Enter the text for your logo. Maximum 3 symbols."
    },
    {
        type: "input",
        name: "textColour",
        message: "Enter the colour of your logo's text, using either a keyword(e.g. Blue), hex code (e.g. #0000FF), or HSL colour values(e.g. hsl(240, 100%, 50%))."
    }
]

export { questions };