import React from 'react';
import Race from '../component/Race';
import Talent from '../component/Talent';
import Virtue from '../component/Virtue';
import Flaw from '../component/Flaw';
import Occupation from '../component/Occupation';

const Randomizer = props => {
  return (
    <div>
      <Race/>
      <Talent/>
      <Virtue/>
      <Flaw/>
      <Occupation/>
    </div>
  )
}

export default Randomizer
