import React, {useState, useEffect} from 'react';

import Repas from '../repas.js';
import{ useParams} from 'react-router-dom'
import { CartProvider } from 'react-use-cart';
import ItemProduits from '../components/ItemProduits.js';
export default function SingleProductRepas() {
 const [SingleProductRepas, SetSingleProductRepas] = useState([])

 const {nomProduit} = useParams()

 useEffect(() => {
    const findProduct =()=>{
        const newProduct = Repas.produits.find((product) => product.nomProduit  === nomProduit )
  
        SetSingleProductRepas(newProduct)

     
    }
    findProduct()
 },
 [nomProduit])
    return (
        <div>
               <CartProvider > 
          <ItemProduits   nomProduit={SingleProductRepas.nomProduit} img={SingleProductRepas.img} desc={SingleProductRepas.desc} price={SingleProductRepas.price}  item={SingleProductRepas}/>
          </CartProvider>
         
          
        </div>
    );
};

