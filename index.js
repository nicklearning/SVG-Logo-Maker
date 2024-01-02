const inquirer = require('inquirer');

// List of predefined colors
const predefinedColors = ['red', 'green', 'blue', 'yellow', 'purple', 'white', 'black'];


const promptQuestions = [
    {

        type: 'input',
        name: 'textLengthInput',
        message: 'Please enter up to three characters:',
        validate: textLengthInput => {
            const trimmedInput = textLengthInput.trim(); // Remove leading and trailing spaces
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
        name: 'colorInput',
        message: 'Please enter a text color for your logo. You may enter a standard color or a hexadecimal number color.',
        validate: colorInput => {
            // Regular expression to match a hexadecimal color code
            const hexColorRegex = /^#([0-9a-fA-F]{3}){1,2}$/;
            const lowerCaseInput = colorInput.toLowerCase();

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
        name: 'shapeInput',
        message: 'Please select a shape color for your logo.',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColorInput',
        message: 'Please enter a shape color for your logo. You may enter a standard color or a hexadecimal number color.',
        validate: shapeColorInput => {
            // Regular expression to match a hexadecimal color code
            const hexColorRegex = /^#([0-9a-fA-F]{3}){1,2}$/;
            const lowerCaseInput = shapeColorInput.toLowerCase();

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
        console.log('User Responses: ', answers);
    })
    // unsuccessful Promise will return data to the .catch method
    .catch(err => {
        console.error('Error during prompt:', err)
    })