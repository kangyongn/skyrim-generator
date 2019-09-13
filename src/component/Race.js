import React, {useState} from 'react';

const Race = props => {
  const [rollOne, setRollOne] = useState(0);
  const [rollTwo, setRollTwo] = useState(0);

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
    setRollOne(Math.floor(Math.random() * 6) + 1);
  }

  const handleRollTwo = () => {
    setRollTwo(Math.floor(Math.random() * 6) + 1);
  }

  let totalRoll = rollOne + rollTwo

  return (
    <div>
      <h1>Race: {totalRoll}: {raceDictionary[totalRoll]} </h1>
      <h2>{rollOne}</h2>
      <button onClick={handleRollOne}>Roll One</button>
      <h2>{rollTwo}</h2>
      <button onClick={handleRollTwo}>Roll Two</button>
    </div>
  )
}

export default Race;
