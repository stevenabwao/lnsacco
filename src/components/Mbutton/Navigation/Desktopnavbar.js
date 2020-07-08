import React from 'react';
import CalcCall from '../toplinks'
import Navlinks from './Navlinks'
import styled from 'styled-components';
import Logo from '../../Home/LNSacco.png';


import './navlink.css'

const MyDesktopNavbar = styled.nav`
 display: flex;
 flex-flow: row nowrap;
 align-items: center;
 background: white;
 color: #407ec9;;
 position: relative;
 height:15vh;
.logo{
    font-size: 5vh;
    font-weight: bold;
}
 `

const Desktopnavbar = () => {
    

    return (
        <div className="topcont">

            <MyDesktopNavbar>
                <img src={Logo} alt='log' style={{ width: "100px" }} />
                <div className='logo'>LAKE NATIONAL SACCO</div>
                <CalcCall />
                {/* <Mbutton/> */}
            </MyDesktopNavbar>
             <div className = 'spacer' />
            <Navlinks />



        </div>


    );

}

export default Desktopnavbar
