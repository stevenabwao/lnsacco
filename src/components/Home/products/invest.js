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
                        <img src = {Ekash} alt=""/>
                        <div className = 'content'>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. 
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
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
                        <img src = {Edukash} alt=""/>
            <div className = 'content'>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. 
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
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
                        <img src = {Agribiz} alt=""/>
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
                            color="#407ec9"
                            size="2x"
                        />
                        <span className = 'title'>salary Loans</span><br></br><br></br>
                        <div className = 'content'>
                        <img src = {Salary} alt=""/>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. 
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
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
            Lorem ipsum dolor sit amet, consectateur adispicing elit. 
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
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
                        <img src = {Biz} alt=""/>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. 
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
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