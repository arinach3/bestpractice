import React, {useState} from 'react';
import recipes from './Recipes';

export function filterRecipes(recipes, searchTerm) {
  return recipes.filter(r =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));

    console.info("filtering recipes")
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
                        <h3>{recipe.title}</h3>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}