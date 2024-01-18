// Base class for all shapes
class Shape {
  constructor() {
    this.color = null; // Initialize color property
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }
}

// Triangle shape class extending the Shape class
class Triangle extends Shape {
  // Render method to return SVG markup for a triangle
  render(text, textColor = 'white') {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,40 250,160 50,160" fill="${this.color}" />
        <text x="150" y="105" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  }
}

// Circle shape class extending the Shape class
class Circle extends Shape {
  // Render method to return SVG markup for a circle
  render(text, textColor = 'white') {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="105" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  }
}

// Square shape class extending the Shape class
class Square extends Shape {
  // Render method to return SVG markup for a square
  render(text, textColor = 'white') {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
        <text x="150" y="105" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  }
}

// Exporting the shape classes for use in other modules
module.exports = { Triangle, Circle, Square };
