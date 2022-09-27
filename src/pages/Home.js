import React, {useState, useEffect} from 'react';
import {  Navigate} from 'react-router-dom';

import  '../styles/style.css'
const Home = () => {

    
    const [redirectNow, setRedirectNow] = useState(false);
 
    
    useEffect(() => {
        const timer = setTimeout(() =>setRedirectNow(true), 2000);
      }, []);
    return redirectNow ? (
        <Navigate to="/menu" />
      ) : (
<div className='no-scroll body-bg'  >

           
 </div>
      
    );
};

export default Home;