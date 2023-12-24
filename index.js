const inquirer = require('inquirer');

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
    /*  {
 
     },
     {
 
     } */
]

inquirer.prompt(promptQuestions)
    // successful Promise will return data to the .then method
    .then(answers => {
        console.log('User Responses: ', answers);
    })
    // unsuccessful Promise will return data to the .catch method
    .catch(err => {
        console.error('Error during prompt:', err)
    })