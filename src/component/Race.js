import React, {useState} from 'react';

import {raceDictionary} from '../resource/Data';

const Race = props => {
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

  let totalRoll = rollOne.value + rollTwo.value

  return (
    <div>
      <h1>Race</h1>
      <h2>{(rollOne.rolled && rollTwo.rolled) ? raceDictionary[totalRoll] : rollOne.value}</h2>
      {
        !rollOne.rolled ?
        <button onClick={handleRollOne}>Roll</button>
        :
        <button disabled={rollTwo.rolled ? true : false} onClick={handleRollTwo}>Roll</button>
      }
    </div>
  )
}

export default Race;
