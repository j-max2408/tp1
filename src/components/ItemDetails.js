import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useCart  } from 'react-use-cart';
import Navigation from './Navigation.js';

const ItemProduits = (props) => {
    const { addItem } = useCart();
 const [quantite, SetQuantite] = useState(0);
    function quantiteUpdate() {
        SetQuantite(quantite + 1)
        addItem(props.item)
    }
    return (
     
                  
     <div className='bg-black-2 no-scroll ' >
        <Navigation/>
       <img src={props.imgdetails} alt="Exposition le temps des Québécois" class="photo"/>
        <h1 class="titre-details ">{props.Titre}</h1>
        <p class="description-details ">{props.desc}</p>
            <div class="ligne2-details "></div>
            <h2 class="prix-details ">Prix: {props.price}$ CAD</h2>
            <h2 class="prix-details ">Quantité : {quantite}</h2>
            <div class="ajouter-details ">
                <button class="bouton" onClick={quantiteUpdate}>AJOUTER</button>
            </div>
            <Link className="btn-item auction-btn mr-2" to={`/expositions`} >  <i class="fa-solid fa-arrow-left-long"></i>    </Link>  
                      
               
        
       
        
        </div> 
    

    );
};

export default ItemProduits;