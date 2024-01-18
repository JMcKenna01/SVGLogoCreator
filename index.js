// Importing necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to prompt user for input using Inquirer
async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: input => input.length <= 3 && input.length > 0 // Validation for text input
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color for the text (keyword or hex):' // Prompt for text color
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:', // Prompt for selecting shape
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color for the shape (keyword or hex):' // Prompt for shape color
    }
  ]);
  return answers;
}

// Function to create SVG content based on user input
function createSVG({ shape, shapeColor, text, textColor }) {
  let shapeInstance;

  switch (shape) {
    case 'Circle':
      shapeInstance = new Circle();
      break;
    case 'Triangle':
      shapeInstance = new Triangle();
      break;
    case 'Square':
      shapeInstance = new Square();
      break;
  }

  // Set the color and render SVG content
  shapeInstance.setColor(shapeColor);
  return shapeInstance.render(text, textColor);
}

// Main function to run the application
async function run() {
  try {
    const userInput = await promptUser(); // Get user input
    const svgContent = createSVG(userInput); // Create SVG content

    // Write the SVG content to a file
    fs.writeFileSync('./examples/logo.svg', svgContent);
    console.log('Generated logo.svg'); // Log success message
  } catch (error) {
    console.error('An error occurred:', error); // Log any errors
  }
}

// Execute the main function
run();
