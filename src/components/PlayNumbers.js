import React from 'react'
import utils from './math-utils'

const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

export default function PlayNumbers(props) {
  return (
    <div>
      {utils.range(1,9).map(numberId => {
      const status = props.status(numberId);
      return <button 
        key={numberId} 
        style={{backgroundColor: colors[status]}}
        onClick={() => props.onClick(numberId,status)}
        className="number">{numberId}
      </button>})}
    </div>
  )
}
