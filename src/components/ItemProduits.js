import React, { useState } from 'react';


import { useCart  } from 'react-use-cart';

const ItemProduits = (props) => {
    const { addItem } = useCart();
    const [quantite, SetQuantite] = useState(0);
    function quantiteUpdate() {
        SetQuantite(quantite + 1)
        addItem(props.item)
    }
    return (
     
                  
     <div>
        <article class="background-card">
        <div class="card">
            <div class="flex-card">
                <img src={props.img} alt="Image de collation" class="img-fluide "/>
            </div>

            <div class="flex-card margin">
                <h2 class="title-card">{props.nomProduit}</h2>
                <p class="text-card">Prix: {props.price}$ CAD</p>
                <p class="text-card" >Quantité: {quantite}</p>
                <button class="button" onClick={quantiteUpdate } >Ajouter</button> 
            </div>                  
        </div>                
    </article>



                      
               
        
       
        
        </div> 
    

    );
};

export default ItemProduits;