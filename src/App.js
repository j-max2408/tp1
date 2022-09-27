import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ProduitPrincipaux from './pages/ProduitPrincipaux.js';
import Home from './pages/Home.js';
import ProduitSecondaire from './pages/ProduitSecondaire.js';
import Repas from './pages/Repas.js';
import Panier from './pages/Shop.js';
import Paiment from './components/Paiment.js';
import Veille from './pages/Veille.js';


import Menu from './pages/Menu.js';
import SingleProduct from './components/SingleProduct.js';
import SingleProductSecondaire from './components/SingleProductSecondaire.js';

import Achat from './pages/Achat.js';


const App = (props) => {
   


  

    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Veille />} />
        <Route path="/expositions" exact component={() => <ProduitPrincipaux data={props} />} element={<ProduitPrincipaux />} />
        <Route path="/repas" element={<Repas />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/Boutique" element={<ProduitSecondaire />} />
        <Route path="/panier/achat" element={<Achat />} />
        <Route path="*" element={<Veille />}  />
        <Route path="/panier/Paiment" element={<Paiment />}  />

         <Route path="/expositions/:nomProduit" element={<SingleProduct />} />
         <Route path="/Boutique/:nomProduit" element={<SingleProductSecondaire />} />
      </Routes>
      </BrowserRouter>
      
      

    )
     
  
  };

  
export default App;

