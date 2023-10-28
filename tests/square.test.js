const Square = require('../lib/square')


describe('Shape', () => {
    it('Test for a red Square', () => {
        const shape = new Square();
        shape.setColor("red");
        console.log(shape);
        expect(shape.render()).toEqual(`<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <rect width="250" height="250" fill="red" />
        <text fill="${this.textColor}" font-size="75px" x="67" y="145">${this.text}</text>
      </svg>`);
    })
});