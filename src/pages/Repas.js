import React from 'react';

import Navigation from '../components/Navigation.js';
import repas from '../repas.js';

import { CartProvider } from 'react-use-cart';
import { NavLink , Link } from 'react-router-dom';
import"https://kit.fontawesome.com/64c0479ff6.js" 
import { useCart } from 'react-use-cart';
import ItemProduits from '../components/ItemProduits.js';

const Repas = () => {
    const { updateItemQuantity , addItem } = useCart();

    return (
        <div className='no-scroll bg-black-2'>
                <CartProvider >
           <Navigation/>
           <h1 className='h1-repas'>Repas</h1>
        
          
   {repas.produits.map((item, index ) =>{
    
              return(

                <div>
   
            <div class="flex-card margin">
                <ItemProduits nomProduit={item.nomProduit} img={item.img} desc={item.desc} price={item.price} quantite={item.quantite}  item={item} />
            </div>                  
             


                
                
           
                </div>
                
              )
            })}
          
      
            </CartProvider>
            
            <div>
            <Link className="btn-item auction-btn mr-2" to={`/menu`} >         <i class="fa-solid fa-arrow-left-long"></i> 
            </Link> 

    </div> 
        </div>
        
    );
    
};

export default Repas;