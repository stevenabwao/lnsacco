import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './navlink.css'
import Dropdown from "./dropdown";


const Navlinks = () => {

    return (
        <div >
            <div className="nav1">
                <ul className='nav-links1'>
                    <li ><Link to='/' className='active'><button className="navButtons1">HOME</button></Link></li>
                    <li ><Link to='/About' className='active'><button className="navButtons">ABOUT US</button></Link></li>
                    <li ><Link to='#' className='active'><button className="navButtons">MANAGEMENT</button></Link></li>
                    <li><Link to='loans' ><button className="navButtons">PRODUCTS</button></Link>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>

                    <li ><Link to='/Resources' className='active'><button className="navButtons">RESOURCES</button></Link></li>
                    <li ><Link to='/Contacts' className='active'><button className="navButtons">CONTACT US</button></Link></li>
                </ul>
                

            </div>
            
            {/* dropdown} { */}
        </div>
    );
}

export default Navlinks;