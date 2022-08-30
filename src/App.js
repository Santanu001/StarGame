import React, { useState } from 'react'
import Game from './Game'

export default function App() {
    const [gameId, setGameId] = useState(1);
    const startNewGame = () => {
        setGameId(gameId + 1);
    }
  return (
    <div>
      <Game key={gameId} startNewGame={startNewGame} />
    </div>
  )
}
