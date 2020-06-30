import React from 'react';

import Navlinks from './Navlinks'

import styled from 'styled-components';

const MyDesktopNavbar = styled.nav`
 display: flex;
 flex-flow: row nowrap;
 justify-content: space-evenly;
 align-items: center;

 background: rgba(64, 107, 187, 0.993);
 color: white;

 height:15vh;
.logo{
    font-size: 5vh;
    font-weight: bold;
    text-shadow:2px 2px 2px black;
}
.nav-links{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width:55vw

}
.link{
    color: white;
    font-size:2.5vh;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 0.5px 0.5px 0.5px black;
}
 `

const Desktopnavbar = () => {
  
    return (
      <MyDesktopNavbar>
          <div className='logo'>Lake National <br></br>S a c c o</div>
             <Navlinks />
         
            {/* <Mbutton/> */}
      </MyDesktopNavbar>
    );
  
}

export default Desktopnavbar
