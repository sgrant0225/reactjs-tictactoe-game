import React from 'react'
import Board from './Board'

export default function Game() {
    const status = "Next player is X"
    const moves = (
        <li>
            <button>Start the Game</button>
        </li>
    );
    const squares = Array(9).fill(null) //creating an array of 9 elements and fill them with null values
    return (
       <div className="game">
           <div className="game-board">
               <Board squares={squares}/>
           </div>
           <div className="game-info">
             <div>{status}</div>
             <ul>{moves}</ul>
           </div>
        </div>
    )
}