import React, {useState} from 'react';
import SideBar from './SideBar';
import "./RecipeBook.css"
import ChosenTab from './ChosenTab';

export default function ChocolatePie(){
    const active = "chocolatepie"
    const [tab, setTab] = useState("")
    return(
        <div class="book">
            <SideBar active={active} />
            <div class="content">
                <h1>Chocolate Pie</h1>
                    <button onClick={() => setTab("")}>Ingredients</button>
                    <button onClick={() => setTab("directions")}>Directions</button>
                    <ChosenTab tab={tab} active={active}/>
            </div>
        </div>
    )
}