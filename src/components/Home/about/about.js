import React from 'react';


import {Link } from 'react-router-dom'
import './about.css'

import TopAbout from './customer.png'


const AboutHome = () => {
    return (
        <div>
            <div className = 'tittle'>
                <h1>Who we are </h1>
            </div>
        <div className = 'abouthome'>

            <div className="img">
             <img className = "image" src = './SACCO.jpeg' alt = 'logo'/>
            </div>
            <div className='text'>
                <h2 className = "sub">Lake National S a c c o</h2>
                <p className = "para">    Lake National (LN) Sacco is a Vehicle of Economic Empowerment and Community Development.
                         We operate in the western block counties namely Transnzoia, Bungoma, Kakamega, Vihiga, Nandi,
                          Kericho, Bomet, Trans-Mara, Kisii, Nyamira, Migori, Homabay, Kisumu, Siaya and Busia
				</p>
                <h3 className = "sub">Our Mandate</h3>
                <p className = "para">To reverse the culture of low entrepreneurship,
                     poor savings &investments, and reduce poverty within 
                     the Lake Basin region mainly through Economic
                     Empowerment initiatives.</p>
                <h3 className = "sub">Our Objective</h3>
                <p className = "para">
                To Free our People from the Shackles of Poverty through
                 Economic Empowerment of our Communities.
                </p><br></br><br></br> 
                <Link to='/about'><button className = 'btnslide'>Read More</button></Link>
                
            </div>
        <div className = 'more'>
            <br></br><br></br><br></br>
        <img className="image" src={TopAbout} alt="about" />
        </div>
           
        </div>
        </div>
            );
}

export default AboutHome;