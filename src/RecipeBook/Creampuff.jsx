import React from 'react';
import SideBar from './SideBar';
import "./RecipeBook.css"

export default function Creampuff(){
    const active = "creampuffs"
    return(
        <div class="book">
            <SideBar active={active} />
            <div class="content">
                <h1>Creampuffs</h1>
            </div>
        </div>
    )
}