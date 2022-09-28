import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route  , Navigate , NavLink , Link} from 'react-router-dom';

import { useCart  } from 'react-use-cart';
import Navigation from '../components/Navigation.js';
 import { CartProvider } from 'react-use-cart';
import "../styles/style.css"

const Menu = () => {

    return  (
  

   
<div className='no-scroll bg-black' 
 >

<CartProvider>
<Navigation/>

    

    <h1 className='titre-page'>Accueil</h1>
    
    <section class="accueil">

<div class="line"></div>
<article class="article-accueil"> 
    <h1 class="numero">01</h1>
  
    <h1 class="titre"> <Link to={`/expositions`} >Expositions </Link> </h1>

  
   <h1 class="fleche"><Link to={`/expositions`} ><span className='expos-fleche'>&#10547;</span>  </Link> </h1>
                            
                            
       
    
</article>

<div class="line"></div>
<article class="article-accueil">
    <h1 class="numero">02</h1>
    <h1 class="titre"> <Link to={`/repas`} >Repas </Link> </h1>

  
   <h1 class="fleche"><Link to={`/repas`} > <span className='expos-fleche'>&#10547;</span> </Link> </h1>
                            
                            
       
</article>

<div class="line"></div>
<article class="article-accueil">
    <h1 class="numero">03</h1>
    <h1 class="titre"> <Link to={`/Boutique`} >Boutique </Link> </h1>

  
<h1 class="fleche"><Link to={`/Boutique`} ><span className='expos-fleche'>&#10547;</span>  </Link> </h1>
                         
                         
      
</article>

<div  class="line"></div>
</section>
</CartProvider>
   
    
  
        
     




           
 </div>
      
    );
};

export default Menu;