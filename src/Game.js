import React, { useEffect, useState } from 'react';
import PlayNumbers from './components/PlayNumbers';
import StarDisplay from './components/StarDisplay';
import utils from './components/math-utils'
import PlayAgain from './components/PlayAgain';

function Game(props) {
  const [stars, setStars] = useState(utils.random(1,9));
  const [availableNums, setAvailableNums] = useState(utils.range(1,9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secLeft, setSecLeft] = useState(10);

  const candidatesArrWrong = utils.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0?'win':secLeft === 0 ? 'lost':'active';

  useEffect( () => {
    if(secLeft > 0 && gameStatus === 'active') {
      const timeId = setTimeout(() => {
        setSecLeft(secLeft - 1);
      }, 1000);
      return () => clearTimeout(timeId);
    }
  }

  )

  const onNumberClick = (number, currentStatus) => {
    if(currentStatus === 'used' || gameStatus !== 'active') {
      return;
    }
    const newCandidateNums = currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter( cn => cn !== number);
    if(utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    }
    else {
      const newAvailableNums = availableNums.filter( n => !newCandidateNums.includes(n));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
      setStars(utils.randomSumIn(newAvailableNums,9)); 
    }
  }

  const numberStatus = (number) => {
    if(!availableNums.includes(number)){
      return 'used';
    }
    if(candidateNums.includes(number)) {
      return candidatesArrWrong ?'wrong':'candidate';
    }
    return 'available';
  
  }
  return (
    <div>
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">  
            {gameStatus !=='active' ? <PlayAgain gameStatus={gameStatus} onClick={props.startNewGame} /> : <StarDisplay stars={stars}/> }
          </div>
          <div className="right">
            <PlayNumbers onClick={onNumberClick} status={numberStatus}/>
          </div>
        </div>
        <div className="timer">
          Time Remaining: {secLeft}
        </div>
      </div>
    </div>
  );
}

export default Game;
