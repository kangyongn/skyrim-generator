import React, {useState} from 'react';

import {occupationDictionary} from '../resource/Data';

const Occupation = props => {
  const [rollOne, setRollOne] = useState({
    value: 0,
    rolled: false
  });
  const [rollTwo, setRollTwo] = useState({
    value: 0,
    rolled: false
  });

  const handleRollOne = () => {
    setRollOne({
      value: Math.floor(Math.random() * 6) + 1,
      rolled: true
    });
  }

  const handleRollTwo = () => {
    setRollTwo({
      value: Math.floor(Math.random() * 6) + 1,
      rolled: true,
    });
  }

  const handleReset = () => {
    let initialState = {
      value: 0,
      rolled: false
    }

    setRollOne(initialState)
    setRollTwo(initialState)
  }

  let totalRoll = rollOne.value + rollTwo.value

  return (
    <div>
      <h1>Occupation</h1>
      <h2>{(rollOne.rolled && rollTwo.rolled) ? `${rollOne.value} + ${rollTwo.value}: ${occupationDictionary[totalRoll]}` : rollOne.value}</h2>
      {
        !rollOne.rolled ?
        <button onClick={handleRollOne}>Roll</button>
        :
        <button disabled={rollTwo.rolled ? true : false} onClick={handleRollTwo}>Roll</button>
      }
      <button disabled={(rollOne.rolled && rollTwo.rolled) ? false : true} onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Occupation;
