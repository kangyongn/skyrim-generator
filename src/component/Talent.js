import React, {useState} from 'react';

const Talent = props => {
  const [rollOne, setRollOne] = useState({
    value: 0,
    rolled: false
  })

  const [rollTwo, setRollTwo] = useState({
    value: 0,
    rolled: false
  })

  const handleRollOne = () => {
    setRollOne({
      value: Math.floor(Math.random() * 6) + 1,
      rolled: true
    })
  }

  return (
    <div>
      <h1>Main Talent</h1>
      <h4>{rollOne.value}</h4>
      <button onClick={handleRollOne}>Roll One</button>
    </div>
  )
}

export default Talent;
