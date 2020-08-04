import React from 'react';

import './invest.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faGraduationCap, faMobileAlt, faCoins, faPeopleCarry,faLayerGroup,faLeaf} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import Register from './register'
import Agribiz  from '../../../images/loans/agribiz.png'
import Ekash from '../../../images/loans/ekash.png';
import Edukash from '../../../images/loans/educash1.jpg';
import Chama from '../../../images/loans/chama.jpg';
import Salary from '../../../images/loans/salary.jpg';
import Biz from '../../../images/loans/bizkash.jpg';

library.add(faGraduationCap, faMobileAlt);

const Investments = () => {

    return (  
        <div>
            <div className= "prod">
            
            <h1 className="products">Our Loan Products</h1>
            </div>
       
        <div className = "cont">
            <div className = "items">
                <FontAwesomeIcon
                            icon={faMobileAlt}
                            color="#407ec9"
                            size="2x"
                        />
                        <span className = 'title'>E-Kash</span><br></br><br></br>
                        <img className= "ekash" src = {Ekash} alt=""/>
                        <div className = 'content'>
            Worried about getting instant cash for an emergency.
            With E-kash you can apply for the loan and get it instantly
             on your mobile phone.
            Enjoy our fast, reliable and convienient offers
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>

            </div>
            <div className = "items">
            <FontAwesomeIcon
                            icon={faGraduationCap}
                            color="#407ec9"
                            size="2x"
                        />
                        <span className = 'title'>Edu-Kash</span><br></br><br></br>
                        <img className= "ekash" src = {Edukash} alt=""/>
            <div className = 'content'>
            Ensure your children learn without worries of school fee. 
            Apply for educash which allowa you to pay school fee without stress.
            Watch your children enjoy their education and realize their cariers
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>

            </div> 
            <div className = "items">
            <FontAwesomeIcon
                            icon={faLeaf}
                            color="green"
                            size="2x"
                        />
                        <span className = 'title'>AgriBiz-loan</span><br></br><br></br>
                        <img className= "ekash" src = {Agribiz} alt=""/>
                        <div className = 'content'>
            Many small holders farmers can confess that accessing a loan that can 
            finance your agri-bussiness project is not easy. 
            Apply for agribiz loan from Lake Nationall Sacco today.
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>
            </div>

        </div>
      
       
        <div className = "cont">
            <div className = "items">
                <FontAwesomeIcon
                            icon={faLayerGroup}
                            color="#407ec9"
                            size="2x"
                        />
                        <span className = 'title'>Salary Loans</span><br></br><br></br>
                        <div className = 'content'>
                        <img src = {Salary} alt=""/>
            You do not have to wait untill end month to pay your bills and
             meet your day to day obligations. 
            Apply and enjoy Lake National Sacco salary loans.
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>

            </div>
            <div className = "items">
            <FontAwesomeIcon
                            icon={faPeopleCarry}
                            color="#407ec9"
                            size="2x"
                        />
             <span className = 'title'>Chama Loans</span><br></br><br></br>
            <div className = 'content'>
            <img src = {Chama} alt=""/>
            Chama loans enable groups to save and access loan. 
            Our loans are reliable,affortable and easily accessible,
             with low interest rate. Apply and enjoy
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>

            </div> 
            <div className = "items">
            <FontAwesomeIcon
                            icon={faCoins}
                            color="#407ec9"
                            size="2x"
                        />
                        <span className = 'title'>Biz-loan</span><br></br><br></br>
                        <div className = 'content'>
                        <img className= "ekash" src = {Biz} alt=""/>
            Biz kash enables our esteemed customers to access funds for their business.
            Boost your bussiness anytime you can.
            Apply and enjoy our great biz kash offers.
            <Link to='/products'> <button className = 'btn'>Learn More</button></Link>
            </div>
            </div>

        </div>
        <Register />


{/* investment products */}

<div className= "prod">
            
<h1 className="products">Our Investments Products</h1>
</div>

<div className = "cont">
<div className = "items">
    <FontAwesomeIcon
                icon={faMobileAlt}
                color="blUE"
                size="2x"
            />
            <span className = 'title'>Target Investments</span><br></br><br></br>
            <div className = 'content'>
Enable one to save to reach a given target after a specified period of time
<Link to='/products'> <button className = 'btn'>Learn More</button></Link>
</div>

</div>
<div className = "items">
<FontAwesomeIcon
                icon={faGraduationCap}
                color="blue"
                size="2x"
            />
            <span className = 'title'>Family Investments</span><br></br><br></br>
<div className = 'content'>
Save and see your family grow and be empowered financially
<Link to='/products'> <button className = 'btn'>Learn More</button></Link>
</div>

</div> 
<div className = "items">
<FontAwesomeIcon
                icon={faLeaf}
                color="green"
                size="2x"
            />
            <span className = 'title'>Business investment</span><br></br><br></br>
            <div className = 'content'>
Lorem ipsum dolor sit amet, consectateur adispicing elit. 
Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
<Link to='/products'> <button className = 'btn'>Learn More</button></Link>
</div>
</div>

</div>


<div className = "cont">
<div className = "items">
    <FontAwesomeIcon
                icon={faLayerGroup}
                color="blUE"
                size="2x"
            />
            <span className = 'title'>Children investment</span><br></br><br></br>
            <div className = 'content'>
Lorem ipsum dolor sit amet, consectateur adispicing elit. 
Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
<Link to='/products'> <button className = 'btn'>Learn More</button></Link>
</div>

</div>
<div className = "items">
<FontAwesomeIcon
                icon={faPeopleCarry}
                color="blue"
                size="2x"
            />
            <span className = 'title'>Chama investment</span><br></br><br></br>
<div className = 'content'>
Lorem ipsum dolor sit amet, consectateur adispicing elit. 
Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
<Link to='/products'> <button className = 'btn'>Learn More</button></Link>
</div>

</div> 
<div className = "items">
<FontAwesomeIcon
                icon={faCoins}
                color="blue"
                background='yellow'
                size="2x"
            />
            <span className = 'title'>Biz-loan</span><br></br><br></br>
            <div className = 'content'>
Lorem ipsum dolor sit amet, consectateur adispicing elit. 
Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
<Link to='/products'> <button className = 'btn'>Learn More</button></Link>
</div>
</div>

</div>
</div>


    );
}
 
export default Investments;