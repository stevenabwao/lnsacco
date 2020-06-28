import React, { Component } from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';


const MyMobileNavbar = styled.nav`
width: 20vw;
background: blue;

.nav-links{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: left;
    list-style: none;
    height: 40vw

}
.link{
    color: black;
    font-size:2.5vh;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 0.5px 0.5px 0.5px blue;
}
 `
const MobileNavbar = () =>{
    return (
      <MyMobileNavbar>
        <Navlinks />
      </MyMobileNavbar>
       
     
    );
}

export default MobileNavbar