import './profil.css'

import React from 'react'
import {ikonyPonuk} from '../../naviac/ponuka/ponuka'
import Templatepage from '../tempaltepage/templatepage'
const Profil = () => {
const Ikona = ({ name, size, color }) => {
  const IconComponent = ikonyPonuk[name];
  if (!IconComponent) return null;       // ak neexistuje, nič sa nezobrazí
  return <IconComponent size={size} color={color} />;  // tu sa vytvorí element a vráti
};
  return (
   <Templatepage>
     <div className='obahssss'>
        <Ikona name = "parkovanie"></Ikona>


     </div>
        </Templatepage>
      
   
  )
}

export default Profil
