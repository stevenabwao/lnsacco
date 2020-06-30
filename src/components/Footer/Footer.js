import React from 'react';
import { Link } from 'react-router-dom'

import "./footer.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import {  faKey, faMapMarkerAlt, faPhoneAlt, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faLinkedin, faUsps} from "@fortawesome/free-brands-svg-icons"


library.add( faKey);



const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Lake National <span>S a c c o</span></h3>

                    <p className="footer-links">
                    <Link to='/' className='link'>Home</Link>

                    <Link to='/about' className='link'>About</Link>

                    <Link to='/investment' className='link'>Investment products</Link>

                    <Link to='/loans' className='link'>Loan products</Link>

                    <Link to='/contacts' className='link'>Contact us</Link>
                    </p>

                    <p className="footer-company-name">Lake National S a c c o  © 2020</p>
                </div>

                <div className="footer-center">

                    <div >
                    <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            color="White"
                            size="2x"
                        />
                        <p><span>5th Floor</span> Mega Plaza, Oginga Odinga street</p>
                    </div>
                    <div>
                    <FontAwesomeIcon
                            icon={faUsps}
                            color="white"
                            size="2x"
                        />
                        <p> P.O. Box 2224-40100, Kisumu</p>
                    </div>

                    <div>
                    <FontAwesomeIcon
                            icon={faPhoneAlt}
                            color="white"
                            size="2x"
                        />
                        <p>+254796101010</p>
                    </div>

                    <div>
                    <FontAwesomeIcon
                            icon={faEnvelopeOpenText}
                            color="white"
                            size="2x"
                        />
                        <p><a href="mailto:corporate@lakesacco.com">corporate@lakesacco.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lake National (LN) Sacco is a Vehicle of Economic Empowerment and Community Development.
                         We operate in the western block counties namely Transnzoia, Bungoma, Kakamega, Vihiga, Nandi,
                          Kericho, Bomet, Trans-Mara, Kisii, Nyamira, Migori, Homabay, Kisumu, Siaya and Busia
				</p>

                    <div className="footer-icons">

                        <a href="todo">
                        <FontAwesomeIcon href="#"
                            icon={faWhatsapp}
                            color="#6DB65B"
                            size="2x"
                        />
                        </a>
                         <a href='todo'><FontAwesomeIcon
                            icon={faTwitter}
                            color="white"
                            size="2x"
                        /></a>
                        <a href='todo'>
                        <FontAwesomeIcon icon={faFacebook} 
                            color="#4267B2"
                            size="2x"
                           
                        />
                        </a>
                        
                        <a href='todo'>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#2867B2"
                            size="2x"
                        />
                        </a>
                        
                        
                      
                    </div>

                </div>

            </footer>
            <div className="last">
                © 2020 abstech developers. All Rights Reserved.
</div>
        </div>
    );
}

export default Footer;