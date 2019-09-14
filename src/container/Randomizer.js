import React from 'react';
import Race from '../component/Race';
import Talent from '../component/Talent';
import Virtue from '../component/Virtue';
import Flaw from '../component/Flaw'

const Randomizer = props => {
  return (
    <div>
      <Race/>
      <Talent/>
      <Virtue/>
      <Flaw/>
    </div>
  )
}

export default Randomizer
