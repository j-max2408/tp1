import React, {useState, useEffect} from 'react';
import produitsPrincipaux from '../produitsPrincipaux.js';

import{link, useParams} from 'react-router-dom'
import { CartProvider } from 'react-use-cart';

import ItemDetails from '../components/ItemDetails.js';
export default function SingleProduct(item) {
  
 const [SingleProduct, SetSingleProduct] = useState([])

 const {nomProduit} = useParams()

 useEffect(( ) => {
    const findProduct =()=>{
        const newProduct = produitsPrincipaux.produits.find((product) => product.nomProduit  === nomProduit )
        
        SetSingleProduct(newProduct)

     
    }
    findProduct()
 },
 [nomProduit])
    return (
        
        <div>
        <CartProvider > 
          <ItemDetails  imgdetails={SingleProduct.imgdetails}  img={SingleProduct.img} desc={SingleProduct.desc} price={SingleProduct.price} Titre={SingleProduct.Titre} quantite={SingleProduct.quantite}  item={SingleProduct}/>
          </CartProvider>

        </div>
    );
};

