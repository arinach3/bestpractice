import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import recipes from './Recipes';

export default function Home(){
    const [searchTerm, setSearchTerm] = useState("");
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));

    console.log(filteredRecipes);
    return(
        <div>
            <h4>Search for a recipe here</h4>
            <input type="text" placeholder='enter recipe name' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            {filteredRecipes.length === 0 ? (
            <p>No recipe found</p>
            ):(
        
            <ul>
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>
                        <h3>{recipe.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}