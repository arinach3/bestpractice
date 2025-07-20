
import test from 'node:test';
import assert from 'node:assert';

//1
function countCharInString(str, char) {
  return str.split(char).length - 1;
}

test('2 e in sheecodes', (t)=> {
  assert.strictEqual(countCharInString("shecodes", "e"), 2);
});


//2
const emptyArray = [];
test('empty arr length is 0', (t)=> {
  assert.strictEqual(emptyArray.length, 0);
});


//3
const myarr = [1,2,3,'yulia'];
test('no Null in arr', (t)=> {
  assert.strictEqual(myarr.includes(null), false);
});