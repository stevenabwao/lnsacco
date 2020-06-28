import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const Navlinks = () =>{

    return (
      <div>
         <ul className = 'nav-links'>
              <li><Link to='/' className='link'>What we do</Link></li>
              <li><Link to='/About' className='link'>Who we are</Link></li>
              <li><Link to='/impact'className='link'>Products & Services</Link></li>
              <li><Link to='/Resources'className='link'>Our Resources</Link></li>
              <li><Link to='Contacts'className='link'>Talk to us</Link></li>
          </ul>
      </div>
    );
}

export default Navlinks