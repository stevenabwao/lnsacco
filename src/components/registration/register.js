import React from 'react'
import Individual from './indiv.jpg'
import './registration.css';
import {TitleComponent}  from '../Titles/title';

const Register = () => {
    return ( 
        <div >
            <TitleComponent title='Registration::Lake National Sacco'/>
            <div className='tittle'>
                <h1 className="abouttitle">Registration requirement</h1>
            </div>
            <div className='resource'>
                <div className="resourcesNav">
                    <span className="topsearch">SEARCH</span><br></br>
                    <label>Search for</label>
                    <input type="search" placeholder="Search" className="search" />
                </div>
                <div className="resourceCont">
                    <div className="tittle">
                        <h3>INDIVIDUAL MEMBERSHIP</h3>
                    </div>
                    <div className="resource">
                    <div className="phot">
                      <h3 className="indivTop">INDIVIDUAL REGISTRATION</h3>
                      <img src={Individual} alt='REG' />
                    </div>
                    <div className="reg">
                        <h3>Registration requirement</h3>
                        <p>1. Complete Membership Application Form 
                            <a href="./wat.pdf" download>(click here to download)</a></p>
                         <p>2. Attach copy of Kenyan National Identity Card or
                              Valid Kenyan Passport</p>
                         <p>3. Attach coloured passport size photograph..</p>
                         <p>4.   Copy of KRA PIN Number</p>
                    </div>
                   
                    </div><br></br><br></br>

                    <div className="tittle">
                        <h3>JOINT MEMBERSHIP</h3>
                    </div>
                    <div className="resource">
                    <div className="phot">
                      <h3 className="indivTop">JOINT REGISTRATION</h3>
                      <img src={Individual} alt='REG' />
                    </div>
                    <div className="reg">
                        <h3>Registration requirement</h3>
                        <p>1. Complete Membership Application Form 
                            <a href="./wat.pdf" download>(click here to download)</a></p>
                         <p>2. Attach copy of Kenyan National Identity Card or
                              Valid Kenyan Passport for bot applicants</p>
                         <p>3. Attach coloured passport size photograph for both applicants.</p>
                         <p>4.   Copy of KRA PIN Numbers for both applicants</p>
                    </div>
                   
                    </div><br></br><br></br>
                    <div className="tittle">
                        <h3>GROUP MEMBERSHIP</h3>
                    </div>
                    <div className="resource">
                    <div className="phot">
                      <h3 className="indivTop">GROUP REGISTRATION</h3>
                      <img src={Individual} alt='REG' />
                    </div>
                    <div className="reg">
                        <h3>Registration requirement</h3>
                        <p>1.  Complete group membership application form. 
                            <a href="./wat.pdf" download>( click here to download)</a></p>
                         <p>2. Attach minutes of the group’s meeting resolving to join Stima Sacco.</p>
                         <p>3.   Attach the group’s constitution..</p>
                         <p>4. Attach copies of Identification Cards, 
                             Passport and photos of authorised signatories</p>
                             <p> 5.  Attach copy of group’s registration certificate.</p>
                             <p> 6.  KRA PIN Numbers (Where applicable)</p>
                    </div>
                   
                    </div>
                    </div>
                    
                    


            </div>
        </div>
     );
}
 
export default Register;