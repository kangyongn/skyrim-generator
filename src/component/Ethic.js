import React, {useState} from  'react';

import {ethicDictionary} from '../resource/Data';

const Ethic = props => {
  const [state, setState] = useState({
    ethic: ['', []],
    rolled: false
  })

  const handleRoll = () => {
    setState({
      ethic: ethicDictionary[Math.floor(Math.random() * 9) + 1],
      rolled: true
    })
  }

  const handleReset = () => {
    setState({
      ethic: ['', []],
      rolled: false
    })
  }

  const ethicList = state.ethic[1].map(ethic => <li>{ethic}</li>)

  return (
    <div>
      <h1>Ethic</h1>
      <h2>{state.rolled ? state.ethic[0] : null}</h2>
      <ul>{ethicList}</ul>
      <button disabled={state.rolled ? true : false} onClick={handleRoll}>Roll</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Ethic
