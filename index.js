const fs = require("fs");
const inquirer = require("inquirer");
const generateLogo = require("./utils/generateLogo");

const questions = [
  {
    type: "list",
    message: "What is the shape you want your SVG to be?",
    name: "shape",
    choices: ["Triangle", "Square", "Circle"],
  },
  {
    type: "input",
    message: "What is the color of the shape?",
    name: "shape_color",
  },
  {
    type: "input",
    message: "Please enter 3 letters of text.",
    name: "text",
  },
  {
    type: "input",
    message: "What color should the text be?",
    name: "text_color",
  },
];

function writeToFile(fileName, data) {
  var content = generateLogo(data);
  fs.writeFile(fileName, content, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log("Generated logo.svg");
  });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    var fileName = "logo.svg";
    writeToFile(fileName, data);
  });
}

init();
