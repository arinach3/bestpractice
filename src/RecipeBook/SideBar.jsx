import React from 'react';
import {Link , useParams} from 'react-router-dom';
import "./SideBar.css"
import recipes from './Recipes.jsx';



export default function SideBar({ active }){
    const { id } = useParams();


    return(
        <div className="sidebar">
      <h2>Choose a recipe</h2>
      <Link to="/favorites">Favorites</Link>
      {recipes.map((recipe) => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
          <li class={`${recipe.id}` === id ? "selected" : ""}>{recipe.title}</li>
        </Link>))}
        
    </div>
    )
}