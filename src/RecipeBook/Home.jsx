import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import recipes from './Recipes';

export default function Home(){
    const [searchTerm, setSearchTerm] = useState("");
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));

    console.log(filteredRecipes);
    return(
        <div>
            <p>Home page</p>
            <input type="text" placeholder='Search for a recipe' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <ul>
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>
                        <h3>{recipe.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}