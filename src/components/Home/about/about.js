import React from 'react';


import {Link } from 'react-router-dom'
import './about.css'


import {  faAngleDoubleRight, faWalking} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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
            <div className = 'more'>"
                <h2 className = "sub" style={{textAlign:"center"}}>To Become a Member??</h2>
                <p className = "para">
                <FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            color="red"
                            size="2x"
                        />Dial <span className = "dial">*533*51# </span>from your Safaricom line and register<br></br>
<FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            color="red"
                            size="2x"
                        />You will receive notification of registration SMS from us.<br></br>
<FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            color="red"
                            size="2x"
                        />Pay entrance fee of <span className = "dial">Kes 500/-</span> to pay bill  no. <span className = "dial">819116</span>  and enter your phone number in the a/c no. field while paying on Mpesa or dial *533# and choose Deposit via Mpesa to pay the entrance fee.<br></br>

<FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            color="red"
                            size="2x"
                        /> Complete the registration forms sent to your email from <span className = "dial">lakesacco@gmail.com</span>, attach a copy of your ID, PIN and passport size photo and scan to lakesacco@gmail.com<br></br>
<FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            color="red"
                            size="2x"
                        />Deposit any amount to your Lake National Sacco account through Mpesa Paybill no.<span className = "dial"> 819116 </span> a/c no: your mobile no. or Dial *533# and Choose deposit via Mpesa to deposit.<br></br>
<FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            color="red"
                            size="2x"
                        /> Dial <span className = "dial">*533#</span> to check your Sacco savings account balance, mobile loan limit, recommend to a friend <br></br>
                </p>
                <span className = "start"> Begin the journey of economic Empowerment <FontAwesomeIcon
                            icon={faWalking}
                            color="blue"
                            size="2x"
                        /></span>
            </div>
           
        </div>
        </div>
            );
}

export default AboutHome;