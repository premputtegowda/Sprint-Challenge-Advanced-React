import React from 'react';


export default function Player(props){

    return (
        <div>
             <div className='player'>
                <h2>{props.player.name}</h2>
                <span>Country: {props.player.country}, Searches: {props.player.searches} </span>
             
              
            </div>
        </div>
    )
}