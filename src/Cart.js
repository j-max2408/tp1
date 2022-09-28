import React, {useState, useEffect} from 'react';
import { Navigate, BrowserRouter, Routes, Route  , Link,  NavLink } from 'react-router-dom';

import { useCart } from 'react-use-cart';

import  './styles/style.css'
import Navigation from './components/Navigation.js';


const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        TotalItems,
        cartTotal,
        updateItemQuantity, 
        removeItem,
        emptyCart,
    } = useCart();
    const [redirectNow, setRedirectNow] = useState(false);

    const [disable, DisabledButton] = useState(false);
    
        const [Paiment, Setpaiment] = useState();
 
        const [PanierName, SetpanierName] = useState("Votre panier");
     
 
        function SetBuypaiment() {
            setTimeout(VerifiedPaiment, 50)
         
            setTimeout(ResetBuypaiment, 50)
           
         
      
        } 
        function ResetBuypaiment() {
             emptyCart();
             setRedirectNow(true);
         
        } 
  

    function VerifiedPaiment () {
        Setpaiment("")
    
    }
    useEffect(() => {
        if(isEmpty){
            DisabledButton(true)
            SetpanierName("Votre panier est vide")
        }
    
     
      });

  
  
    return redirectNow ? (
        <Navigate to="paiment" />
      ) : (
      
         
        <div className='no-scroll bg-black'  >
            <Navigation/>
         
        <div className='bg-black '> 

         
        <h1 class="titre-cart">{PanierName}</h1>
        <div class="line"></div>

        <section class="box_panier example">
            
         {items.map((item, index ) =>{

        return( 
                     
         <div key={index} >
                    



                
            <article class="article_panier">
                
                <img src={item.img} alt="" class="fluide fluid-mobile"/>
                <p class="titre">{item.nomProduit} </p>
             
                <p class="prix">{item.price * item.quantity} $ CAD</p>
            </article>
            <div class="article_panier">
                <p class="quantite">Quantité : {item.quantity}</p>
                <p class="prix-moins" onClick={() => updateItemQuantity(item.id, item.quantity - 1) }>-</p>
                <p class="prix-plus" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</p>
              
                <p class="supprimer_panier" onClick={() => removeItem(item.id)}>Supprimer</p>
            </div>
            <div class="line"></div>



                         

    
           
    



                       



 </div>
                  
  )
                  
   })}
       </section>
                     

        <div>
        <button class="btn-payee" onClick={SetBuypaiment} disabled={disable}>PAYER</button>

        <Link  to={`/expositions`} > <p class="btn-retour">Retour</p></Link>  
        
    </div>   
        
    <h1>{Paiment} </h1>



   </div>
</div>
    
 )
        
      
    
    
};

export default Cart;