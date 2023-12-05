import inquirer from "inquirer";
import fs from "node:fs";
import { questions } from "./lib/questions.js";
import { genShape } from "./lib/generateShape.js";
import { renderSVG } from "./lib/renderSVG.js";
import  dayjs  from "dayjs"


function writeToFile(data) {
    const logo = genShape(data)
    fs.mkdir("./dist", { recursive: true }, (error) => {if (error) throw error;})
    fs.writeFile(`./dist/logo-${data.logoShape}-${dayjs().format("DD-MMM-YY-HH-m-s")}.svg`, renderSVG(logo), (error) => error ? console.error(error) : console.log("SVG GENERATED"));
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