import React from 'react';

import Race from '../component/Race';
import Talent from '../component/Talent';
import Virtue from '../component/Virtue';
import Flaw from '../component/Flaw';
import Occupation from '../component/Occupation';
import Location from '../component/Location';
import Interest from '../component/Interest';
import Motivation from '../component/Motivation';

const Randomizer = props => {
  return (
    <div>
      <Race/>
      <Talent/>
      <Virtue/>
      <Flaw/>
      <Occupation/>
      <Location/>
      <Interest/>
      <Motivation/>
    </div>
  )
}

export default Randomizer
