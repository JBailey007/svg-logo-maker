const fs = require ('fs');
const inquirer = require ('inquirer');
const generateLogo = require('./utils/generateLogo');

const questions = [
    {
        type: 'list',
        message: 'What is the shape you want your SVG to be?',
        name: 'shape',
        choices: [
            'Triangle',
            'Square',
            'Circle'
        ]
    },
    {
        type: 'input',
        message: 'What is the color of the shape?',
        name: 'shape_color',

    },
    {
        type: 'input',
        message: 'Please enter 3 letters of text.',
        name: 'text_input',

    },
    {
        type: 'input',
        message: 'What color should the text be?',
        name: 'text_color',

    },
];

