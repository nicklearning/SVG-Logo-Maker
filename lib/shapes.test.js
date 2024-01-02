const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
    describe('circle', () => {
        it('should construct a circle with the correct values', () => {
            const shape = new Circle("green", "white", "NJS");
            expect(shape.render()).toMatchSnapshot(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                <circle cx="150" cy="100" r="80" fill="${shape.shapeColor}"></circle>
                <text x="150" y="122.5" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
          </svg>`)
        });
    });
    describe('triangle', () => {
        it('should construct a triangle with the correct values', () => {
            const shape = new Triangle("green", "white", "NJS");
            expect(shape.render()).toMatchSnapshot(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="${shape.x1},${shape.y1} ${shape.x2},${shape.y2} ${shape.x3},${shape.y3}" fill="${shape.shapeColor}"></polygon>
            <text x="180" y="175" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
          </svg>`)
        });
    });
    describe('square', () => {
        it('should construct a square with the correct values', () => {
            const shape = new Square("green", "white", "NJS");
            expect(shape.render()).toMatchSnapshot(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <rect x='80' y='20' width="${shape.sideLength}" height="${shape.sideLength}" fill="${shape.shapeColor}"></rect>
            <text x="160" y="120" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
          </svg>`)
        });
    });
});