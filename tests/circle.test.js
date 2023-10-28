const Circle = require('../lib/circle')

describe('Shape', () => {
    it('Test for a green circle', () => {
        const shape = new Circle();
        shape.setColor("green");
        console.log(shape);
        expect(shape.render()).toEqual(`<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="green" />
        <text fill="${this.textColor}" font-size="75px" x="50%" y="50%" text-anchor="middle">${this.text}</text>
        </svg>`);
    })
});