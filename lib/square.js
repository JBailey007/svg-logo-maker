const Shape = require("./shapes");

class Square extends Shape {
  render() {
    //This is where the SVG file dimensions will go.
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <rect width="250" height="250" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75px" x="67" y="145">${this.text}</text>
      </svg>`;
  }
}

module.exports = Square;
