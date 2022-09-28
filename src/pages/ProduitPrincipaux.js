import React , {useRef} from 'react';
import { NavLink , Link } from 'react-router-dom';


import Navigation from '../components/Navigation.js';
import produitsPrincipaux from '../produitsPrincipaux.js';

import { CartProvider } from 'react-use-cart';




const ProduitPrincipaux = () => {
 
    const ref = useRef(null);
  


   
    return (
        
        <div className='bg-black-2 no-scroll'>

        
         
            <div>
         
        
      
     <CartProvider >
     <Navigation/>
     <h1 class="titre-page">Expositions</h1>
     <section className="expositions">
   {produitsPrincipaux.produits.map((item, index) =>{
              return( 
              <div key={index}  >


      
                            


        <div className="line"></div>
            <article className="article-expositions">
    <h1 className="numero">{item.numero}</h1>
    <img src={process.env.PUBLIC_URL + item.img} alt="" className="fluide fluid-mobile"/>
    
    <h1 className="titre"><Link to={`/expositions/${item.nomProduit}`}> {item.Titre}</Link></h1>
    
   <h1 className="fleche">  <Link className="a-expos " to={`/expositions/${item.nomProduit}`} ><span className='expos-fleche'>&#10547;</span></Link> </h1>
</article>

       

              </div>
              
              )
              
            })}     
      
           </section>
   
        </CartProvider>
   


         
        </div>
        
            </div>
            

    );
};

export default ProduitPrincipaux;