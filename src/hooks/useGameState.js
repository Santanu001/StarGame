import {useState, useEffect} from 'react'
import utils from '../components/math-utils'

export default function useGameState() {
    const [stars, setStars] = useState(utils.random(1,9));
    const [availableNums, setAvailableNums] = useState(utils.range(1,9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secLeft, setSecLeft] = useState(10);

    useEffect( () => {
        if(secLeft > 0 && availableNums.length > 0) {
          const timeId = setTimeout(() => {
            setSecLeft(secLeft - 1);
          }, 1000);
          return () => clearTimeout(timeId);
          }
        }
      )

      const setGameState = (newCandidateNums) => {
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
      
    
    return {stars, availableNums, candidateNums, secLeft, setGameState};
}
