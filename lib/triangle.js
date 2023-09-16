const Shape = require("./shapes");

class Triangle extends Shape {
  render() {
    //This is where the SVG file dimensions will go.
    return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,60 100,400 400,400" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75px" x="50%" y="50%" text-anchor="middle">${this.text}</text>
      </svg>`;
  }
}

module.exports = Triangle;
