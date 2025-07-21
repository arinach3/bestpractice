import React from 'react';
import "./SideBar.css"



export default function SideBar({ active }){


    return(
        <div className="sidebar">
      <h2>Choose a recipe</h2>
      <ul>
        <li class={active === "creampuffs" ? "selected" : ""}><a  href="/creampuffs">Creampuffs</a></li>
        <li class={active === "chocolatePie" ? "selected" : ""}><a href="/chocolatePie">Chocolate pie</a></li>
      </ul>
    </div>
    )
}