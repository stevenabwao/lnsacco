import React from 'react';
import './management.css'
import Md from './board/md.jpg'
const Management = () => {
    return ( 
        <div>
            <div className='tittle'>
                <h1 className = "abouttitle">Management</h1>
            </div>
        <div className="manageCont">
        <div className = "management">
            <div className="photo">
             <img  src={Md} alt= ""/>
            </div>
            <button className="button">Position</button>

        </div>
    
        </div>
        <div className="manageCont">
        <div className = "management">
            <div className="photo">
            <img  src={Md} alt= ""/>
            </div>
            <button className="button">Position</button>

        </div>
        <div className = "management">
            <div className="photo">
            <img  src={Md} alt= ""/>
            </div>
            <button className="button">Position</button>

        </div>
        <div className = "management">
            <div className="photo">
            <img  src={Md} alt= ""/>
            </div>
            <div>
            <button className="button">Position</button>
            </div>
            
            

        </div>
         
        </div>
        
            
            

        </div>
        
        
     );
}
 
export default Management;