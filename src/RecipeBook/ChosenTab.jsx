import React from 'react';
import CPIngredients from './CPIngredients';
import CPDirections from "./CPDirections";

export default function ChosenTab({ tab , active }){
    switch(tab){
        case 'directions':    
            switch (active){
                case 'creampuffs':
                    return(
                        
                        <div>
                            <CPDirections />
                        </div>
                    )
                case 'chocolatepie':
                    return(
                        <div>
                            <p>directions chocolate pie</p>
                        </div>
                    )
                }

        default:
            switch (active){
                case 'creampuffs':
                    return(
                        <CPIngredients />
                    )
                case 'chocolatepie':
                    return(
                        <div>
                            <p>ingredient chocolate pie</p>
                        </div>
                    )
                }
            }
    
}