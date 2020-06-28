import React, { Component } from 'react' ;
import Desktopnavbar from './Desktopnavbar';
// import TopImage from './topimage';
import styled from 'styled-components'

const MyNavbar = styled.nav`
`



export default class Navbar extends Component {
  render() {
    return (
      <MyNavbar>
        <Desktopnavbar/>
       {/* <TopImage /> */}
      </MyNavbar>
    );
  }
}
