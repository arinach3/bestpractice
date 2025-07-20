import Calculator from './Calculator.js';
import test from 'node:test';
import assert from 'node:assert';


  const calc = new Calculator();

test('test add', (t) => {
    assert.strictEqual(calc.add(3,4), 7);
})

test('test subtract', (t) => {
    assert.strictEqual(calc.sub(5,3), 2);
})

test('test multiply', (t) => {
    assert.strictEqual(calc.mul(3,5), 15);
})

test('test divide', (t) => {
    assert.strictEqual(calc.div(15,5), 3);
})

test('divide by zero', (t) => {
    assert.throws(() => {
        calc.div(5,0);
    }, {
    name: 'Error',
    message: 'division by zero!'
 } );
})
