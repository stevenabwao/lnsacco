import React from 'react';


import Registration from './Downloads/Registration';
import Investments from './products/invest';
import AboutHome from './about/about';
import Slider1 from './slider/slider'


const Home =() =>{
    return(
        <div className = "home">
            <Slider1 />
            <AboutHome />
             <Investments />
            <Registration />
           
            
        </div>
    )
}
export default Home