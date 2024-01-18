// Importing the shape classes for testing
const { Triangle, Circle, Square } = require('./shapes');

// Test suite for shape classes
describe('Shapes', () => {
  // Test suite for Triangle class
  describe('Triangle', () => {
    // Test for rendering correct SVG markup for Triangle
    test('renders correct SVG markup', () => {
      const triangle = new Triangle();
      triangle.setColor('red');
      const svg = triangle.render('A', 'white');
      // Assertions to check if the rendered SVG contains correct color and text
      expect(svg).toMatch(/<polygon.*fill="red"/);
      expect(svg).toMatch(/<text.*fill="white"/);
      expect(svg).toContain('A');
    });
  });

  // Test suite for Circle class
  describe('Circle', () => {
    // Test for rendering correct SVG markup for Circle
    test('renders correct SVG markup', () => {
      const circle = new Circle();
      circle.setColor('blue');
      const svg = circle.render('B', 'black');
      // Assertions similar to above for Circle
      expect(svg).toMatch(/<circle.*fill="blue"/);
      expect(svg).toMatch(/<text.*fill="black"/);
      expect(svg).toContain('B');
    });
  });

  // Test suite for Square class
  describe('Square', () => {
    // Test for rendering correct SVG markup for Square
    test('renders correct SVG markup', () => {
      const square = new Square();
      square.setColor('green');
      const svg = square.render('C', 'yellow');
      // Assertions similar to above for Square
      expect(svg).toMatch(/<rect.*fill="green"/);
      expect(svg).toMatch(/<text.*fill="yellow"/);
      expect(svg).toContain('C');
    });
  });
});
