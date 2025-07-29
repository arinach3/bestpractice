import test from 'node:test';
import assert from 'node:assert';
import {toggleFavorite} from '../RecipeBook/RecipePage.jsx';

test('add recipe to favorites', (t) => {
    const current = ['pancakes'];
    const update = toggleFavorite(current, 'creampuffs');
    assert.deepStrictEqual(update, ['pancakes', 'creampuffs']);

})