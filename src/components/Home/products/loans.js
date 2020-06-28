import './loan.css'

import React from'react';

import Carousel from'react-responsive-carousel'

const DemoCarousel = () =>{
        return (<div>
            <Carousel showArrows={true} className = 'carousel'  >
                <div>
                    <img src={require('../../../images/money.jpeg')} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src={require('../../../images/money2.jpeg')} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src={require('../../../images/images.jpeg')} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <img src={require('../../../images/top.jpg')} />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
            </div>
        );
    }

export default DemoCarousel