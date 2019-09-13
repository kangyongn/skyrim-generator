import React, {useState} from 'react';

const Race = props => {
  const [rollOne, setRollOne] = useState({
    value: 0,
    rolled: false
  });
  const [rollTwo, setRollTwo] = useState({
    value: 0,
    rolled: false
  });

  const raceDictionary = {
    1: 'Not Possible',
    2: 'Roll Again',
    3: 'Altmer',
    4: 'Argonian',
    5: 'Bosmer',
    6: 'Breton',
    7: 'Dunmer',
    8: 'Imperial',
    9: 'Khajit',
    10: 'Nord',
    11: 'Orc',
    12: 'Redguard'
  }

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
