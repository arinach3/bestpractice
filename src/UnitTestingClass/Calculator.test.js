import test from 'node:test';
import assert from 'node:assert';
import Calculator from './Calculator.js';

const calc = new Calculator();

test('Test 2+3=5', (t) => {
  assert.strictEqual(calc.add(2,3),5);
});


test('Test -', (t) => {
  assert.strictEqual(calc.sub(2,3),-1);
});


test('Test /', (t) => {
  assert.strictEqual(calc.div(3,3),1);
});


test('Test / by 0', (t) => {
  assert.throws(() => {
    calc.div(4, 0);
  }, {
    name: 'Error',
    message: 'division by zero!'
  });});
