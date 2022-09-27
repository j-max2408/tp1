import React, {useState, useEffect} from 'react';


import produitsSecondaire from '../produitsSecondaire.js';

import{link, useParams} from "react-router-dom"

import { CartProvider } from 'react-use-cart';
import ItemBoutique from './ItemBoutique.js';
export default function SingleProductSecondaire() {
 const [SingleProductSecondaire, SetSingleProductSecondaire] = useState([])

 const {nomProduit} = useParams()

 useEffect(() => {
    const findProduct =()=>{
        const newProduct = produitsSecondaire.produits.find((product) => product.nomProduit  === nomProduit )

        SetSingleProductSecondaire(newProduct)

     
    }
    findProduct()
 },
 [nomProduit])
    return (
        <div>
        <CartProvider > 
          <ItemBoutique   nomProduit={SingleProductSecondaire.nomProduit} img={SingleProductSecondaire.img} desc={SingleProductSecondaire.desc} price={SingleProductSecondaire.price} Titre={SingleProductSecondaire.Titre} item={SingleProductSecondaire}/>
          </CartProvider>
    
         
          
        </div>
    );
};

