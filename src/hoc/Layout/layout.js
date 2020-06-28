import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Mbutton/Navigation/Navbar'
import './layout.css'
class Layout extends Component{
   
    render(){
        return(
            <div>
                <Navbar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
export default Layout