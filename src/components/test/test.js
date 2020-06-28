import React from 'react';

import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'



fontawesome.library.add(faCheckSquare, faCoffee);

const Test = () => (
  <div>
    <FontAwesomeIcon icon="check-square" /><br /><br />
    <FontAwesomeIcon icon="coffee" />
  </div>
);
export default Test