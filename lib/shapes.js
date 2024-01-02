class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }

    render() {
        // Abstract method, to be implemented by child classes
        throw new Error('Method not implemented');
    }
}

class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
        this.radius = 80;
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="${this.radius}" fill="${this.shapeColor}"></circle>
        <text x="150" y="122.5" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;

    }
}

class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
        this.sideLength = 160;
    }
    render() {
        const x1 = 100;
        const y1 = 200;
        const x2 = 260;
        const y2 = 200;
        const x3 = 180;
        const y3 = 20;
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
              <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.shapeColor}"></polygon>
              <text x="180" y="175" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }
}

class Square extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
        this.sideLength = 160;
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
              <rect x='80' y='20' width="${this.sideLength}" height="${this.sideLength}" fill="${this.shapeColor}"></rect>
              <text x="160" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }
}

module.exports = { Circle, Triangle, Square };

