import React from 'react';
import Race from '../component/Race';
import Talent from '../component/Talent';
import Virtue from '../component/Virtue';
import Flaw from '../component/Flaw';
import Occupation from '../component/Occupation';
import Location from '../component/Location';

const Randomizer = props => {
  return (
    <div>
      <Race/>
      <Talent/>
      <Virtue/>
      <Flaw/>
      <Occupation/>
      <Location />
    </div>
  )
}

export default Randomizer
