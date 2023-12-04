import inquirer from "inquirer";
import fs from "node:fs";
import { questions } from "./lib/questions.js";
import { genShape } from "./lib/generateShape.js";
import { renderSVG } from "./lib/renderSVG.js";
 
function writeToFile(data) {
    const logo = genShape(data)
    fs.mkdir("./dist", { recursive: true }, (error) => {if (error) throw error;})
    fs.writeFile("./dist/logo.svg", renderSVG(logo), (error) => error ? console.error(error) : console.log("SVG GENERATED"));
}

async function init() {
    try {
        const data = await inquirer.prompt(questions)
        // console.log(data)
        writeToFile(data)
    } catch (error){
        throw error;
    }
}
init()