import React, {useState} from  'react';

import {talentDictionary} from '../resource/Data';

const Talent = props => {
  const [talents, setTalents] = useState([])

  const handleRoll = () => {
    console.log('working')
    console.log(talents)
    let newTalent = Math.floor(Math.random() * 18) + 1
    if(!talents.includes(newTalent)) {
      setTalents([...talents, newTalent])
    }
  }

  const handleReset = () => {
    setTalents([])
  }

  const talentList = talents.map(talent => <li>{talentDictionary[talent]}</li>)

  return (
    <div>
      <h1>Talent</h1>
      <button disabled={(talents.length === 3) ? true : false} onClick={handleRoll}>Roll</button>
      <button onClick={handleReset}>Reset</button>
      <ul>{talentList}</ul>
    </div>
  )
}

export default Talent
