import './rezervacie.css'

import React, { useState, useEffect, useRef,useContext } from 'react';
import Templatepage from '../tempaltepage/templatepage'
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../naviac/reactcontext/reactcontext';
import Card from '../../naviac/portalpop/portalpop';
const Rezervacie = () => {
const { presun,setPresun } = useContext(GlobalContext); 
    const location = useLocation();
    
     
  //     if (!location) {
  //   return <p>Žiadne dáta pre tento projekt</p>;
  // }
  const skrol = useRef(null)
  const premenna = () => {
 skrol.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <Templatepage >
     <Card
      nadpis="Pridané do rezervácie."
      ikona ={ <i class='bx bx-cart' ></i>}
      ></Card>
     <div style={{height:"300px"}}>
      <button 
      onClick={premenna}


     style={{width:"30px",height:"50px"}}></button></div>
      <div className='Rezervacie'>
        <div ref={skrol}>koko</div>

        <ul className='zoznamicek'>
          {presun.map((prev, index) => (
  <li key={index} className='snadtopude'>
    <p>Dospelí: {prev.dospeli}</p>

  
    <p>Deti: {prev.deti}</p>
      <div 
   onClick={() => setPresun(prev => prev.filter((A,i) => i !== index))}
      
      className='buttonnaodstarenie'></div>
  </li>
))}


        </ul>
       
      </div>
    </Templatepage>
  )
}

export default Rezervacie
