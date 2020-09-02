import React from 'react';
import { Link } from 'react-router-dom'
import TopAbout from '../../images/about1.jpg'
import './about.css'
import {TitleComponent}  from '../Titles/title';

const About = () => {
    return (
        <div>
            <TitleComponent title='About::Lake National Sacco'/>
            <div className='tittle'>
                <h1 className = "abouttitle">About us </h1>
            </div>
            <div className = "aboutContainer">
                <div className="aboutnav">
                    <span className="topsearch">SEARCH</span><br></br>
                    <label>Search for</label>
                    <input type="search" placeholder="Search" className="search" />
                    <ul className='nav-about'>

                        <li><Link to='#objective' className='aboutlink'><button className="aboutlink">Objective</button></Link></li>
                        <li><Link className='aboutlink'><button className="aboutlink">Legislation</button></Link></li>
                        <li><Link className='aboutlink'><button className="aboutlink">Our Mandate</button></Link></li>
                        <li><Link className='aboutlink'><button className="aboutlink">Core Values</button></Link></li>

                    </ul>
                </div>

                <div className='middle'>
                    <div>
                       <img src={TopAbout} alt="about" />
                    </div>
                    <div className='text1'>
                        <h2 className="subAbout">Who we are</h2>
                        <p className="para">    Lake National (LN) Sacco is a Vehicle of Economic Empowerment and Community Development.
                                 We operate in the western block counties namely Transnzoia, Bungoma, Kakamega, Vihiga, Nandi,
                                  Kericho, Bomet, Trans-Mara, Kisii, Nyamira, Migori, Homabay, Kisumu, Siaya and Busia
				</p>
                        <h3 className="subAbout">Our Mandate</h3>
                        <p className="para">To reverse the culture of low entrepreneurship,
                             poor savings &investments, and reduce poverty within
                             the Lake Basin region mainly through Economic
                     Empowerment initiatives.</p>
                        <h3 className="subAbout">Our Objective</h3>
                        <p className="para">
                            To Free our People from the Shackles of Poverty through
                             Economic Empowerment of our Communities.
                </p>
                <h3 className="subAbout">Our Mision</h3>
                        <p className="para">
                            To Free our People from the Shackles of Poverty through
                             Economic Empowerment of our Communities.
                </p>
                <h3 className="subAbout">Our vision</h3>
                        <p className="para">
                            To Free our People from the Shackles of Poverty through
                             Economic Empowerment of our Communities.
                </p>
                <h3 className="subAbout">Core Values</h3>
                        <p className="para">
                            To Free our People from the Shackles of Poverty through
                             Economic Empowerment of our Communities.
                </p>
                    </div>
                </div>
                <div className="last">
                    
                </div>
            </div>

        </div>
    );
}

export default About;