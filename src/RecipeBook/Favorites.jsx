import React, {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';

import recipes from './Recipes';
import SideBar from './SideBar';


export default function Favorites(){
    const [favoriteID, setFavoriteID] = useState([]);

    useEffect(() => {
    const stored = localStorage.getItem('favorites');
    setFavoriteID(stored ? JSON.parse(stored) : []);
  }, []);

    const favoriteRecipes = recipes.filter(recipe => favoriteID.includes(recipe.id));

    return(
        <div class="book">
            <SideBar />
            <div class="content">
                <h1>Favorite Recipes</h1>
                {favoriteRecipes.length === 0 ? (
                    <p>no favorites yet</p>
                ) : (
                    <ul>
                        {favoriteRecipes.map(recipe => (
                            <li key={recipe.id}>
                                <Link to={`/recipes/${recipe.id}`}>
                                <h3>{recipe.title}</h3>
                                </Link>
                                </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}