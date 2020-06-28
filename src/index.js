

import React from 'react';
import ReactDOM from 'react-dom'
import Routes from './routes/routes'

import {BrowserRouter} from 'react-router-dom';



const Lnweb = () =>{
    return(
        
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            
        
    )
}

ReactDOM.render(<Lnweb />,document.getElementById('app'));