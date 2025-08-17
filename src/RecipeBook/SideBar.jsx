import React from 'react';
import {Link , useParams} from 'react-router-dom';
import "./SideBar.css"
import recipes from './Recipes.jsx';



export default function SideBar({ active }){
    const { id } = useParams();


    return(
        <div className="sidebar">
      <h2>Choose a recipe</h2>
<<<<<<< HEAD
      <Link to="/favorites">Favorites</Link>
=======
      <Link to="/favorites" onClick={() => console.info("favorite menu clicked")}>Favorites</Link>

>>>>>>> bf8b9a69f2de34c439e8cce9ef8b2f9b654d57bd
      {recipes.map((recipe) => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id} onClick={() => console.info("Clicked recipe: " + recipe.title)}>
          <li class={`${recipe.id}` === id ? "selected" : ""}>{recipe.title}</li>
        </Link>))}
        
    </div>
    )
}