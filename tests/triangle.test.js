const Triangle = require('../lib/triangle')

describe('Shape', () => {
    it('Test for a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        console.log(shape);
        expect(shape.render()).toEqual(`<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,60 100,400 400,400" fill="blue" />
        <text fill="${this.textColor}" font-size="75px" x="50%" y="50%" text-anchor="middle">${this.text}</text>
      </svg>`);
    })
});