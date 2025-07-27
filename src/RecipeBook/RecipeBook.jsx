import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar';
import "./RecipeBook.css";

export default function RecipeBook(){
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {const stored = JSON.parse(localStorage.getItem('favorite')) || [];
    setFavorite(stored);}, []);

    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favorite)); 
    }, [favorite]);

    const toggleFavorite = (id) => {
        if(favorite.includes(id)) {
            setFavorite(favorite.filter(favId => favId !== id));
        }else {
            setFavorite([...favorite, id]);
        }
    };

    const isFavorite = (id) => favorite.includes(id);
    

    return(
        <div class="book">
            <SideBar />
            <div class="content">
                <h1>Welcome to your cookbook</h1>


            </div>
            
        </div>
    )
}