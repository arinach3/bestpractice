import React, {useState} from 'react';
import SideBar from './SideBar';
import "./RecipeBook.css"
import CPIngredients from './CPIngredients';
import ChosenTab from './ChosenTab';


export default function Creampuff(){
    const active = "creampuffs"
    const [tab, setTab] = useState("")
    return(
        <div class="book">
            <SideBar active={active} />
            <div class="content">

                <h1>Creampuffs</h1>
                <button class="recipeMenu" onClick={() => setTab("")}>Ingredients</button>
                <button class="recipeMenu" onClick={() => setTab("directions")}>Directions</button>
                <ChosenTab tab={tab} active={active}/>
            </div>
        </div>
    )
}