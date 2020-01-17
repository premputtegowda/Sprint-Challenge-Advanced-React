import React from 'react';
import Player from './Player';


export default function PlayerList(props){
    
    return (
        <div className="player-list">
            {props.players.map((player, index)=>(
                <div key={index}>
                    <Player player={player} />
                </div>
                ))
            }
        </div>
    )
}