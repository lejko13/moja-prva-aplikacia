import './lenukazka.css'
import React, { useState, useRef,useContext,useEffect } from 'react';
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'
import { motion } from 'framer-motion'
import Ukazovatelko from '../ukazovatelko/ukazovatelko'

const Lenkukazka = ({ children ,style}) => {
   
     const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,setInfo,scrollToRef,informacie,hodnotenie,majitel,otazky,vidim,setVidim,objekt1,fungujem,druha,tretia,akotofunugje,premenna
      } = useContext(GlobalContext);

    


  

  return (
    <motion.div
    ref={objekt1}
    style={style}
      className='Lenkukazka'
      initial={{ opacity: 0, y: 0 }}   // na začiatku neviditeľný a posunutý
      animate={{ opacity: 1, y: 0 }}  
      exit={{ opacity: 0, y: 0 }}   // po načítaní sa pekne zobrazí
      transition={{ duration: 0.3, ease: 'easeOut' }} // plynulá animácia
    >
      <div className='strankastarnka'>
      {children}
      </div>
      <div style={{width:"fit-content"}}>
      <Ukazovatelko
    style={{ background: "transparent", position: "relative" ,height:"15px" ,width:"15px",fontSize:"20px"}}

   onClick={() => {
  setVidim(null); // alebo undefined
}}
      ><i className='bx bx-x'></i></Ukazovatelko>
      </div>



    </motion.div>
  )
}

export default Lenkukazka
