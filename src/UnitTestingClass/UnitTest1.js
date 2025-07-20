import test from 'node:test';
import assert from 'node:assert';


function countLetter(word, letter){
    return word.split('').filter(char => char === letter).length;
}

function checkLength(word){
    return word.length;
}

const array= [1,2,3,];

test('test 2+2 equals 4', (t) => {
    assert.strictEqual(4, 2 + 2);
});

test('two e in shecodes', (t) => {
    assert.strictEqual(countLetter("shecodes", "e"), 2);
})

test('length is 0', (t) =>{
    assert.strictEqual(checkLength(""), 0);
})

test('check no null in array', (t) => {
    assert.strictEqual(array.includes(null), false);
})