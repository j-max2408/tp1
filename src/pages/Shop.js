import React from 'react';

import Panier from '../Cart.js';
import { CartProvider } from 'react-use-cart';


const Shop = () => {
    


  
   
    

  


    return (
        <div className='no-scroll bg-black' >
         

            <CartProvider >
            <Panier/>
            </CartProvider>
           

        </div>


        
   
    );
    
};

export default Shop;