import React, {useState} from 'react';
import SideBar from './SideBar';
import "./RecipeBook.css";

export default function RecipeBook(){
    return(
        <div class="book">
            <SideBar />
            <div class="content">
                <h1>Welcome to your cookbook</h1>

            </div>
            
        </div>
    )
}