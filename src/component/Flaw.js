import React, {useState} from 'react';

import {flawDictionary} from '../resource/Data';

const Flaw = props => {
  const [roll, setRoll] = useState({
    value: 0,
    rolled: false
  })

  const handleRoll = () => {
    setRoll({
      value: Math.floor(Math.random() * 6) + 1,
      rolled: true
    })
  }

  const handleReset = () => {
    setRoll({
      value: 0,
      rolled: false
    })
  }

  return (
    <div>
      <h1>Flaw</h1>
      <h2>{roll.rolled ? flawDictionary[roll.value][0] : null}</h2>
      <p><i>{roll.rolled ? flawDictionary[roll.value][1] : null}</i></p>
      <button disabled={roll.rolled ? true : false} onClick={handleRoll}>Roll</button>
      <button disabled={roll.rolled ? false : true} onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Flaw
