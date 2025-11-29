import './navigaciamobil.css'

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Ikony  from '../header/ikony/ikony'
import { RiShoppingBasket2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import IkonaMobil from '../../naviac/ikonaMobil/ikonaMobil'
import { color } from 'framer-motion';

import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
const Navigaciamobil = ({otvorenie,setOtvorenie,hoverheader,sethoverheader,inputRef,farba,setFarba,setQuery,query,setDomov,pojdeme,poslednyref
}) => {
   
       const { pocetOblubene, setPocetOblubene, filter, setFilter } = useContext(GlobalContext);
   const [aktivny, setAktivny] = useState(1);

   const navigate = useNavigate();

  return (
    <div className='kokokokoo'>
          <div className='buzna'>
            <div className='buzna2'>
              <IkonaMobil
              onClick = {() => {setAktivny(1),navigate("/");}}
            
              // stylecek = {{color:aktivny === 1  ? "var(--farba-cierna)" : "var(--farba-sivaText)"}} 
              style = {{color:aktivny === 1  ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}           
              ikona = {<i class='bx bx-search' ></i>}
              text = {"Domov"}
              ></IkonaMobil>
              <IkonaMobil
              onClick={() => {setAktivny(2),
                      navigate("/Rezervacie")
                   
                    }}
              
            
              style = {{color:aktivny === 2 ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}  
              ikona={<RiShoppingBasket2Line  />}
              text = {"Rezervácie"}
              ></IkonaMobil>
              <IkonaMobil
                   onClick={() => {setAktivny(3),
                      
                      navigate("/Konverzacie")
                    }}
            
              style = {{color:aktivny === 3 ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}  
            ikona={<i class='bx bx-chat'></i>}
              text = {"Správy"}
              ></IkonaMobil>

              <IkonaMobil
                   onClick = {() => {setAktivny(4),navigate("/Upozornenia")}}
            
              style = {{color:aktivny === 4 ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}  
              ikona={<i class='bx bx-heart' ></i>}
              text = {"Obľúbené"}
              ></IkonaMobil>

              <IkonaMobil
                   onClick = {() => setAktivny(5)}
            
              style = {{color:aktivny === 5 ? "var(--farba-cierna)" : "var(--farba-sivaText)"}}  
            ikona={<i class='bx bx-user' ></i>}
              text = {"Profil"}
              ></IkonaMobil>
            </div>
        </div>
       
    </div>
  )
}

export default Navigaciamobil
