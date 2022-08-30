import React from 'react'

export default function PlayAgain(props) {
  return (
    <div>
        <div className="game-done">
            <div className="message" style={{color: props.gameStatus==='win'?'green':'red'}}>
                {props.gameStatus==='win'?'Nice':'Game Over'}
            </div>
            <button onClick={props.onClick}>Play Again</button>
        </div>
    </div>
  )
}
