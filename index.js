import inquirer from "inquirer";
import fs from "node:fs";
import { questions } from "./lib/questions.js";
import { generateShape } from "./lib/generateShape.js";
import { renderSVG } from "./lib/renderSVG.js";

