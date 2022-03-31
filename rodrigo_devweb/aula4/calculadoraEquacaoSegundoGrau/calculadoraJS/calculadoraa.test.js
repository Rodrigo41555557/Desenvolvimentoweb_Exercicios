const soma = require(`./soma`);
const sub = require(`./sub`);
const mult = require(`./mult`);
const div = require(`./div`);

it('Soma de dois positivos', () => {
    expect(soma(2,4)).toBe(6)
})

it('Subtracao', () => {
    expect(soma(9,3)).toBe(2)
}) 