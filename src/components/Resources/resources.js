import React from 'react';
import Register from '../../images/about.jpg'

import './resources.css'
const Resources = () => {
    return (
        <div >
            <div className='tittle'>
                <h1 className="abouttitle">DOWNLOADS</h1>
            </div>
            <div className='resource'>
                <div className="resourcesNav">
                    <span className="topsearch">SEARCH</span><br></br>
                    <label>Search for</label>
                    <input type="search" placeholder="Search" className="search" />
                </div>
                <div className="resourceCont">
                    <div className="downloadsTop">
                    </div>
                    <div className="tittle">
                        <h3>HERE ARE OUR DOWNLOADS</h3>
                    </div>
                    <div className="resource">
                    <div className="regPhoto">
                      <h3>Registration Documents</h3>
                      <img src={Register} alt='REG' />
                    </div>
                    <div>
                        <h3>Downloads</h3>
                       <ul>
                       <li>Individual Registration Form</li>
                        <li>Grouped Registration Form</li>
                       </ul>
                    </div>
                    </div>

                    <div className="resource">
                    <div className="regPhoto">
                      <h3>Loan product Documents</h3>
                      <img src={Register} alt='REG' />
                    </div>
                    <div>
                        <h3>Downloads</h3>
                        <ul>
                       <li>Individual Registration Form</li>
                        <li>Grouped Registration Form</li>
                       </ul>
                    </div>
                    </div>

                    
                    <div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Resources;