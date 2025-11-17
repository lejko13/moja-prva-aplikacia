import './castcosahybe.css'

import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import Lenikona from '../lenikona/lenikona'
import Textyheader from '../textyheader/textyheader'

const Castcosahyba = () => {
  const[hover,setHover] = useState(null)
 const mitotStyle = {
    width: 'fit-content',
  position: 'absolute',
  whiteSpace: 'nowrap',
  fontSize: 'var(--font-size-small)',
  left: '50%',            // stred horizontálne
  top: '45px',                // od vrchu rodiča
  transform: 'translateX(-50%)', // len horizontálne vycentrovanie
  padding: '0px 7px',
  borderRadius: 'var(--border-radius-maly)',
  color: 'var(--farba-biela)',
  display: 'flex',
  alignItems: 'center'
};

const obal = {
  height:"fit-content",
  position:"relative",
          width:"fit-content",
         
}
  // coonst[vidim,setVidim] = useState(null)
    const { pocetOblubene, setPocetOblubene, filter, setFilter } = useContext(GlobalContext);
    
  return (
    <div className='fitrovenepolozky'>
              <div className='jedenko'></div>
              <div className='dvaenko'>
                <div style={{
                  position:"absolute",
                  height:"100%",
                  width:"100%",
                  zIndex:"10",
                  // backgroundColor:"pink"

                }}></div>
                {}
 <AnimatePresence>
  
    <motion.div
      className='tutobude'
      initial={{ opacity: 1, y: 100 }}   // začína neviditeľné a posunuté hore
        animate={{ y: filter ? 0 : -100, }}     // viditeľné a na správnej pozícii
      exit={{ opacity: 0, y: -40 }}    

      transition={{ duration: 0.5, ease: "easeOut" }}  // plynulý prechod
    >
      
      <div className='obshaTUbedu'>

        <div style={obal}> 

          <Lenikona
          onMouseEnter={() => setHover(7)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 7 ? "var(  --farba-siva)" : "transparent"
          }}
          > <i class='bx bx-building-house'></i>
        {hover === 7 && <Textyheader
        style={mitotStyle}
        >Mestské</Textyheader>}

          </Lenikona>
        </div>

        <div style={obal}> 
      <Lenikona
      onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 1 ? "var(  --farba-siva)" : "transparent"
          }}
      > <i class='bx bx-wallet' ></i>
      {hover === 1 && <Textyheader
        style={mitotStyle}
        >Vidiek</Textyheader>}
      </Lenikona>
       </div>

       <div style={obal}> 
      <Lenikona
      onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 2 ? "var(  --farba-siva)" : "transparent"
          }}
      > <i class='bx bx-group'></i>
      {hover === 2 && <Textyheader
        style={mitotStyle}
        >Pre dvoch</Textyheader>}
       
      </Lenikona>
         </div>


    <div style={obal}> 
      <Lenikona
      onMouseEnter={() => setHover(3)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 3 ? "var(  --farba-siva)" : "transparent"
          }}
      > <i class='bx bx-palette' ></i>
      {hover === 3 && <Textyheader
        style={mitotStyle}
        >S výhľadom</Textyheader>}
      </Lenikona>
       </div>

        <div style={obal}> 
      <Lenikona
      onMouseEnter={() => setHover(4)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 4 ? "var(  --farba-siva)" : "transparent"
          }}
      > <i class='bx bx-star' ></i>
       {hover === 4 && <Textyheader
        style={mitotStyle}
        >Prémiové</Textyheader>}
      </Lenikona>
        </div>

        
        

        <div style={obal}> 
      <Lenikona
      
      
      onMouseEnter={() => setHover(5)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 5 ? "var(  --farba-siva)" : "transparent"
          }}
      > <i class='bx bx-swim' ></i>
          {hover === 5 && <Textyheader
        style={mitotStyle}
        >S bazénom</Textyheader>}
      </Lenikona>

       </div>
     
   
        <div style={obal}>
      <Lenikona
      
      onMouseEnter={() => setHover(6)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 6 ? "var(  --farba-siva)" : "transparent"
          }}
      > <i class='bx bx-car'></i>
      
      </Lenikona>
       {hover === 6 && <Textyheader
        style={mitotStyle}
        >S parkovaním</Textyheader>}
      </div>
      
      
<div className='customfitler'></div>

      </div>
        <div className='pome'>
      <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L0,100 A100,100 0 0,1 100,0 Z" fill="var(--farba-biela)" stroke="var(--farba-biela)"/>
      </svg>
      </div>
        <div className='pome2'>
      <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L0,100 A100,100 0 0,1 100,0 Z" fill="var(--farba-biela)" stroke="var(--farba-biela)"/>
      </svg>
      </div>
    </motion.div>

</AnimatePresence>
               
              </div>
              <div className='tirko'></div>

            </div>
  )
}

export default Castcosahyba
