import React from 'react';


import { faCalculator, faRegistered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'


import './toplinks.css'


const CalcCall = () => {
  return (<div className='toplinks'>
    <ul>
      <Link to="/calculator" className ="links"><button className='btnlink'><FontAwesomeIcon
        icon={faCalculator}
        color="#407ec9"
        size="2x"
      /></button>Loans Calculator</Link>
      
      <Link to="/register" className = "links"><button className='btnlink'><FontAwesomeIcon icon={faRegistered}
        color="#407ec9" size='2x' /></button>Registration</Link>
    </ul>
  </div>);
}

export default CalcCall;