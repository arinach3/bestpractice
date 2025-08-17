import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import recipes from './Recipes';
import SideBar from './SideBar';
import "./Ingredients.css";
import "./RecipeBook.css";


export default function RecipePage(){
    const { id } = useParams();
    const recipe = recipes.find((r) => r.id === id);
    
    const [favorite, setFavorite] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorite)); 
    }, [favorite]);

    const toggleFavorite = (id) => {
        if(favorite.includes(id)) {
            setFavorite(favorite.filter(favId => favId !== id));
        }else {
            setFavorite([...favorite, id]);
        }
    };

    const isFavorite = (id) => favorite.includes(id);

    if (!recipe) return <p>Recipe not found</p>;

    return (
        <div class="book">
            <SideBar />
            <div class="content">
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
                <h3>Ingredients</h3>
                <ol>
                    {recipe.ingredients.map((item, i) => <li class="recipe" key={i}>{item}</li>)}
                </ol>
                <h3>Instructions</h3>
                <ol>
                    {recipe.instructions.map((item, i) => <li class="recipe" key={i}>{item}</li>)}
                </ol>
                <button class="favButton" onClick={() => toggleFavorite(recipe.id)}>{isFavorite(recipe.id) ? "💔Remove from favorites" : "💜 Add to favorites"}</button>
            </div>
        </div>
    );
    }
