const Shape = require('./shapes');

class Circle extends Shape {

    render() {
        //This is where the SVG file dimensions will go. 
        return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="${this.color}" />
        <text fill="${this.textColor}" fontsize="76" x="172" y="250">${this.text}</text>
        </svg>`
    }
}

module.exports = Circle;