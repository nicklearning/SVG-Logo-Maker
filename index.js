const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');
const { error } = require('console');

// List of predefined colors
const predefinedColors = ['red', 'green', 'blue', 'yellow', 'purple', 'white', 'black'];


const promptQuestions = [
    {

        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters:',
        validate: text => {
            const trimmedInput = text.trim(); // Remove leading and trailing spaces
            if (trimmedInput.length === 0) {
                return 'Please enter at least one character.';
            }
            if (trimmedInput.length > 3) {
                return 'Please enter up to three characters.';
            }
            return true; // Validation passed
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a text color for your logo. You may enter a standard color or a hexadecimal number color.',
        validate: textColor => {
            // Regular expression to match a hexadecimal color code
            const hexColorRegex = /^#([0-9a-fA-F]{3}){1,2}$/;
            const lowerCaseInput = textColor.toLowerCase();

            if (hexColorRegex.test(lowerCaseInput)) {
                return true;
            } else if (predefinedColors.includes(lowerCaseInput)) {
                return true;
            } else {
                return `Please enter a valid hexadecimal color code (e.g., #ff0000) or a valid color from the list: ${predefinedColors.join(', ')}`;
            }
        },
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Please select a shape color for your logo.',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a shape color for your logo. You may enter a standard color or a hexadecimal number color.',
        validate: shapeColor => {
            // Regular expression to match a hexadecimal color code
            const hexColorRegex = /^#([0-9a-fA-F]{3}){1,2}$/;
            const lowerCaseInput = shapeColor.toLowerCase();

            if (hexColorRegex.test(lowerCaseInput)) {
                return true;
            } else if (predefinedColors.includes(lowerCaseInput)) {
                return true;
            } else {
                return `Please enter a valid hexadecimal color code (e.g., #ff0000) or a valid color from the list: ${predefinedColors.join(', ')}`;
            }
        },
    },
];

inquirer.prompt(promptQuestions)
    // successful Promise will return data to the .then method
    .then(answers => {
        //console.log('User Responses: ', answers);
        const { text, textColor, shapeType, shapeColor } = answers;
        let shape;

        switch (shapeType.toLowerCase()) {
            case 'circle':
                shape = new Circle(shapeColor, textColor, text);
                break;
            case 'triangle':
                shape = new Triangle(shapeColor, textColor, text);
                break;
            case 'square':
                shape = new Square(shapeColor, textColor, text);
                break;
            default:
                throw new Error('Shape type is unsupported')
        }

        const svgContent = shape.render();
        const fileName = 'logo.svg'

        fs.writeFile(fileName, svgContent, (err) => {
            if (err) {
                console.error('Error creating SVG file:', err);
            } else {
                console.log("Generated logo.svg");
            }
        });
    })
    // unsuccessful Promise will return data to the .catch method
    .catch(err => {
        console.error('Error during prompt:', err)
    })


