import React from 'react';


import Registration from './Downloads/Registration';
import Investments from './products/invest';
import AboutHome from './about/about';
import Slider1 from './slider/slider'
import {TitleComponent}  from '../Titles/title';

const Home =() =>{
    return(
        <div className = "home">
             <TitleComponent title='Home::Lake National Sacco'/>
            <Slider1 />
            <AboutHome />
             <Investments />
            <Registration />
           
            
        </div>
    )
}
export default Home