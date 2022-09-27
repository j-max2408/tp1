import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
const  logo  = '../img/musee-explorateur-logo.png'
const Achat = () => {
    const [sampleNumber, setSampleNumber] = useState();

    const [redirectNowAchat, setRedirectAchatNow] = useState(false);
    function numeroDePaiment () {
        let min = 1000;
        let max = 9999;
        setSampleNumber(Math.round(Math.random() * (max - min) + min))
      

    }
    
    useEffect(() => {
        numeroDePaiment()
        setInterval(() => {
            setRedirectAchatNow(true) 
        },5000 );
     
      });

      return redirectNowAchat ? (
        <Navigate to="/veille" />
      ) : (
        <div className='no-scroll bg-black'>
                 <img src={logo} class="logo-achat"/>
        <div class="carre">
            <p class="titre">MERCI DE VOTRE ACHAT !</p>  
            <p class="commande">Votre numéro de commande est le {sampleNumber}</p>
        </div>
        </div>
    );
};

export default Achat;