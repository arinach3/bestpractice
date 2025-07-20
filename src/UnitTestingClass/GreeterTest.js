// Greeter real usage
import Greeter from './Greeter.js';
import assert from 'assert';
import test from 'node:test';
import { mock } from 'node:test';

const greeter = new Greeter();

// Greeter UT with mock to getHour
const proxy = mock.method(greeter, 'getHour');

test('Test Morning', (t) => {
  proxy.mock.mockImplementation(() => 10);
  assert.strictEqual(greeter.greet('Shoshi'), 'Good morning, Shoshi!');
});

test('Test Afternoon', (t) => {
  proxy.mock.mockImplementation(() => 14);
  assert.strictEqual(greeter.greet('Shoshi'), 'Good afternoon, Shoshi!');
});
