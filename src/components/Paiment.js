import React from 'react';
import { Link } from 'react-router-dom';
const  crochet = '../img/paiement-carte-gold.png'
const  crochetEspece = '../img/paiement-espece-gold.png'
const paiment = () => {
    return (
            <div className='bg-black-3'>



            
        <p class=""></p> 

        <div class="carre2">
            
        <p class="titre-3">Choisissez votre mode de paiement</p> 
        <div class="ajouter ">
            
        <Link className='a-panier-achat ' to={`/panier/achat`}><button class="bouton-paiment">Espèces<br/><img  src={process.env.PUBLIC_URL + crochetEspece} class="crochet" /></button></Link>
        <Link className='a-panier-achat' to={`/panier/achat`}> <button class="bouton-paiment">Carte bancaire<br/><img  src={process.env.PUBLIC_URL + crochet} class="crochet"/></button></Link>
        </div>
        
        </div>
        
        </div>
        
    );
};

export default paiment;