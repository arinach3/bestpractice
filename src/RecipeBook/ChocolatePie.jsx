import React, {useState} from 'react';
import SideBar from './SideBar';
import "./RecipeBook.css"

export default function ChocolatePie(){
    const active = "chocolatePie"
    return(
        <div class="book">
            <SideBar active={active} />
            <div class="content">
                <h1>Chocolate Pie</h1>
            </div>
        </div>
    )
}