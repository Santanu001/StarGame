import React from 'react'
import utils from './math-utils'
export default function StarDisplay(props) {
  return (
    <div>
      {utils.range(1,props.stars).map(starId => <div key={starId} className='star'/>)}
    </div>
  )
}
