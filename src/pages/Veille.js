import React from 'react';
import { NavLink} from 'react-router-dom';


import "../styles/style.css"

const Veille = () => {
   
    return (
      
        <NavLink to="/home"  className={(nav) => (nav.isActive ? "nav-active" : "")}>
   
   
    <div className='no-scroll home' >
         <video autoPlay muted loop >
             <source src="../video/veille.mp4" type="video/mp4"/>
         </video>

    </div> 
    </NavLink>

      
    );
};

export default Veille;