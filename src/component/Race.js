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
      <h2>{(rollOne.rolled && rollTwo.rolled) ? raceDictionary[totalRoll] : 'Undecided'}</h2>
      <h4>{rollOne.value}</h4>
      {rollOne.rolled ?
        <button disabled>Roll One</button>
        :
        <button onClick={handleRollOne}>Roll One</button>
      }
      <h4>{rollTwo.value}</h4>
      {rollTwo.rolled ?
        <button disabled>Roll Two</button>
        :
        <button onClick={handleRollTwo}>Roll Two</button>
      }
    </div>
  )
}

export default Race;
