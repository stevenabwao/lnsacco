import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import './navlink.css'
import Dropdown from "./dropdown";


const Navlinks = () => {
  const [dropdownOpen, setDropdownOpen] =  useState(false);


  const openHandler = ()=>{
   
      setDropdownOpen(true)
  
    

  }
  // let dropdown
  // if(!dropdownOpen){
  //           dropdown = <Dropdown />
  // }
  // else{
  //           dropdown=""
  // }
  return ( 
    <div >
        <div className = "nav1">
         <ul className = 'nav-links1'>
              <li ><Link to='/' className='active'><button className = "navButtons1">HOME</button></Link></li>
              <li ><Link to='/About' className='active'><button className = "navButtons">ABOUT US</button></Link></li>
              <li ><Link to='#' className='active'><button className = "navButtons">MANAGEMENT</button></Link></li>
              <li><button onClick={openHandler} className = "navButtons">PRODUCTS</button></li>
              <li ><Link to='/Resources'className='active'><button className = "navButtons">RESOURCES</button></Link></li>
              <li ><Link to='Contacts'className='active'><button className = "navButtons">CONTACT US</button></Link></li>
          </ul>
          
      </div>
     {/* dropdown} { */}
      </div>
   );
}
 
export default Navlinks;