import React, { } from 'react';
import { Link } from 'react-router-dom'
import './navlink.css'
// import Dropdown from "./dropdown";


const Navlinks = () => {

    return (
        <div >
            <div className="nav1">
                <ul className='nav-links1'>
                    <li ><Link to='/' className='active'><button className="navButtons1">HOME</button></Link></li>
                    <li ><Link to='/About' className='active'><button className="navButtons">ABOUT US</button></Link></li>
                    <li ><Link to='/Management' className='active'><button className="navButtons">MANAGEMENT</button></Link></li>

                    <div class="dropdown">
                        <button className="dropbtn">PRODUCTS</button>
                        <div className="dropdown-content">
                            <Link to="/loans"><button className="navButtons1">Loan products</button></Link>
                            <Link><button className="navButtons1">Investment products</button></Link>


                        </div>
                    </div>

                    <li ><Link to='/Resources' className='active'><button className="navButtons">RESOURCES</button></Link></li>
                    <li ><Link to='/Contacts' className='active'><button className="navButtons">CONTACT US</button></Link></li>
                </ul>


            </div>

            {/* dropdown} { */}
        </div>
    );
}

export default Navlinks;