import React from 'react';


import { faCalculator, faPhoneAlt, faRegistered } from '@fortawesome/free-solid-svg-icons';
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
      <Link to="/contactUs"className ="links"><button className='btnlink'><FontAwesomeIcon icon={faPhoneAlt}
        color="#407ec9" size='2x' /></button>Call us</Link>
      <Link to="/register" className = "links"><button className='btnlink'><FontAwesomeIcon icon={faRegistered}
        color="#407ec9" size='2x' /></button>Register</Link>
    </ul>
  </div>);
}

export default CalcCall;