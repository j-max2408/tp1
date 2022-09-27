import React ,{useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import produitsPrincipaux from '../produitsPrincipaux.js';
const  logo  = '../img/musee-explorateur-logo.png'

const  coffre = '../img/coffres/coffre_close.png'
const  coffre2 = '../img/coffres/coffre_open_1.png'
const  coffre3 = '../img/coffres/coffre_open_2.png'
const  coffre4 = '../img/coffres/coffre_open_3.png'
const  coffre5 = '../img/coffres/coffre_open_4.png'
const  coffre6 = '../img/coffres/coffre_open_5.png'
const  coffre7 = '../img/coffres/coffre_open_6.png'
const  coffre8 = '../img/coffres/coffre_open_7.png'
const  coffre9 = '../img/coffres/coffre_open_8.png'
const  coffre10 = '../img/coffres/coffre_open_9.png'

const   AccueilBoutton  = '../img/btn-accueil.png'
const Navigation = () => {

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
    const [source,setSource] = useState(coffre);
    const [quantite, SetQuantite] = useState(0);
    useEffect(() => {
   
        items.map((item, index ) =>{
       
        if( totalUniqueItems === 1){
            setSource(coffre2)
        }
        if( totalUniqueItems === 2){
            setSource(coffre3)
        }
        if( totalUniqueItems === 3){
            setSource(coffre4)
        }
        if( totalUniqueItems === 4){
            setSource(coffre5)
        }
        if( totalUniqueItems === 5){
            setSource(coffre6)
        }
        if( totalUniqueItems === 6){
            setSource(coffre7)
        }
        if( totalUniqueItems === 7){
            setSource(coffre8)
        }
        if( totalUniqueItems === 8){
            setSource(coffre9)
        }
        if( totalUniqueItems === 9){
            setSource(coffre10)
        }
    
    })
      });


    return (
        <div>
         <div className='flex'>       
         <NavLink  to="/menu" > 
                    <img src={logo} alt="logo musée des explorateurs"   className='logo' />
            </NavLink>      
                    <NavLink   to="/panier" > 
                     <img src={source} alt="panier vide/ coffre fermer"  className="panier-css"/>


                    </NavLink>    
                    
                    <NavLink   to="/menu" >     
                    <img src={AccueilBoutton} alt="bouton de retour vers l'accueil" className="logo_accueil" />
                    
                    </NavLink>    
                    </div>
                    <hr className='border-menu'></hr>
                
        </div>
    );
};

export default Navigation;