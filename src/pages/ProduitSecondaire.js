import React from 'react';
import Navigation from '../components/Navigation.js';
import produitsSecondaire from '../produitsSecondaire.js';

import { CartProvider } from 'react-use-cart';
import { NavLink , Link } from 'react-router-dom';
const ProduitSecondaire = () => {

    return (
      
        <div className=' bg-black-2'>
                        <CartProvider > 
          <Navigation/>
          <h1 class="titre-page">Expositions</h1>
 
            {produitsSecondaire.produits.map((item, index ) =>{
              return(
                 <div key={index} >
      <section className="expositions">
           <div className="line"></div>
            <article className="article-expositions">
             <h1 className="numero">{item.numero}</h1>
           <img src={item.img} alt="" className="fluide"/>
            <h1 className="titre"><Link to={`/Boutique/${item.nomProduit}`}> {item.nomProduit}</Link></h1>
    
    <Link className="btn-item auction-btn mr-2" to={`/Boutique/${item.nomProduit}`} > <h1 className="fleche"><span>&#10547;</span></h1></Link> 
</article>

       
        </section>
        
              </div>
              )
            })}<Link className="btn-item auction-btn mr-2" to={`/menu`} >         <i class="fa-solid fa-arrow-left-long"></i> 
            </Link> 
            </CartProvider>
        </div>
    );
};

export default ProduitSecondaire;