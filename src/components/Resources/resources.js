import React from 'react';
import Register from '../../images/about.jpg'
import RegistrationForm from '../../documents/wat.pdf'
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
                      <h2>Registration Documents</h2>
                      <img src={Register} alt='REG' />
                    </div>
                    <div>
                        <h2>Downloads</h2>
                        <a className="pdf" href={RegistrationForm} target="_blank">Individual Registration Form</a><br></br>
                        <a className="pdf" href="reg.pdf">Joint Registration Form</a><br></br>
                        <a className="pdf" href="reg.pdf">Grouped Registration Form</a>
                    </div>
                    </div>

                    <div className="resource">
                    <div className="regPhoto">
                      <h2>Loan product Documents</h2>
                      <img src={Register} alt='REG' />
                    </div>
                    <div>
                        <h3>Downloads</h3>
                        <a href="reg.pdf">Individual Registration Form</a><br></br>
                        <a href="reg.pdf">Grouped Registration Form</a>
                      
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