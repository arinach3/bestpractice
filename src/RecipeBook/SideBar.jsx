import React from 'react';
import {Link , useParams} from 'react-router-dom';
import "./SideBar.css"
import recipes from './Recipes';



export default function SideBar({ active }){
    const { id } = useParams();


    return(
        <div className="sidebar">
      <h2>Choose a recipe</h2>
      <Link to="/favorites" onClick={() => console.info("favorite menu clicked")}>Favorites</Link>

      {recipes.map((recipe) => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id} onClick={() => console.info("Clicked recipe: " + recipe.title)}>
          <li class={`${recipe.id}` === id ? "selected" : ""}>{recipe.title}</li>
        </Link>))}
        
    </div>
    )
}