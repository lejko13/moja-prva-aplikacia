import './castcosahybe.css'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import Lenikona from '../lenikona/lenikona'
import Textyheader from '../textyheader/textyheader'

const Castcosahyba = ({setDomov,rodic,posledny,dva,tri,styri,pat,sest,sedem,pojdeme,domovcek,lavasipka,pravasipka,poslednyref}) => {
  


  
// console.log(pravasipka.current);
// console.log(lavasipka.current);


  const { pocetOblubene, setPocetOblubene, filter, setFilter, } = useContext(GlobalContext);
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

    
useEffect(() => {
  const handleClickOutside = (event) => {
    const refs = [pojdeme, posledny, dva, tri, styri, pat, sest, sedem, domovcek,poslednyref];

    // skontroluj klasické refs
    for (let ref of refs) {
      if (ref?.current?.contains(event.target)) {
        return;
      }
    }

    // skontroluj refs, ktoré sú polia
    const arrayRefs = [lavasipka, pravasipka];
    for (let ref of arrayRefs) {
      if (ref.current?.some(el => el && el.contains(event.target))) {
        return;
      }
    }

    // ak klik NEBOL v žiadnom refe → zatvor
    setFilter(false);
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [filter]);

    
  return (
    <div className='fitrovenepolozky'>
              <div className='jedenko'></div>
              <div className='dvaenko'>
                <div style={{
                  position:"absolute",
                  height:"100%",
                  width:"100%",
                  zIndex:"10",
                  backgroundColor:"var(--farba-biela)"
                  // backgroundColor:"pink"

                }}></div>
                
 <AnimatePresence>
  
    <motion.div
    ref={rodic}
     className='tutobude'
  initial={{ opacity: 0, y: 90 }}   // neviditeľný + dole
  animate={{
    opacity: filter === "otovrene" ? 1 : 0,
    y: filter === "otovrene" ? 0 : -90,
  }}
  exit={{ opacity: 0, y: -90 }}
  transition={{ duration: 0.5, ease: "easeOut" }}  
    >
      
      <div className='obshaTUbedu'>

        <div style={obal}> 

          <Lenikona  
          ref={domovcek}
          onClick = {() => {setDomov("domov")}}
          onMouseEnter={() => setHover(7)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 7 ? "var( --farba-main2)" : "transparent"
          }}
          > 
          <i class='bx bx-home-alt'></i>
        {hover === 7 && <Textyheader
        style={mitotStyle}
        >Domov</Textyheader>}

          </Lenikona>
        </div>

        <div style={obal}> 
      <Lenikona
      ref={dva}
       onClick = {() => {setDomov("Vidiek")}}
      onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 1 ? "var( --farba-main2)" : "transparent"
          }}
      > <i class='bx bx-wallet' ></i>
      {hover === 1 && <Textyheader
        style={mitotStyle}
        >Vidiek</Textyheader>}
      </Lenikona>
       </div>

       <div style={obal}> 
      <Lenikona
      ref={tri}
       onClick = {() => {setDomov("Pre dvoch")}}
      onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 2 ?"var( --farba-main2)" : "transparent"
          }}
      > <i class='bx bx-group'></i>
      {hover === 2 && <Textyheader
        style={mitotStyle}
        >Pre dvoch</Textyheader>}
       
      </Lenikona>
         </div>


    {/* <div style={obal}> 
      <Lenikona
      ref={styri}
       onClick = {() => {setDomov("S výhľadom")}}
      onMouseEnter={() => setHover(3)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 3 ? "var( --farba-main2)" : "transparent"
          }}
      > <i class='bx bx-palette' ></i>
      {hover === 3 && <Textyheader
        style={mitotStyle}
        >S výhľadom</Textyheader>}
      </Lenikona>
       </div> */}

        <div style={obal}> 
      <Lenikona
      ref={pat}
       onClick = {() => {setDomov("Prémiové")}}
      onMouseEnter={() => setHover(4)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 4 ? "var( --farba-main2)" : "transparent"
          }}
      > <i class='bx bx-star' ></i>
       {hover === 4 && <Textyheader
        style={mitotStyle}
        >Prémiové</Textyheader>}
      </Lenikona>
        </div>

        
        

        <div style={obal}> 
      <Lenikona
      ref={sest}
      
       onClick = {() => {setDomov("S bazénom")}}
      onMouseEnter={() => setHover(5)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 5 ? "var( --farba-main2)" : "transparent"
          }}
      > <i class='bx bx-swim' ></i>
          {hover === 5 && <Textyheader
        style={mitotStyle}
        >S bazénom</Textyheader>}
      </Lenikona>

       </div>
     
   
        {/* <div style={obal}>
      <Lenikona
      ref = {sedem}
       onClick = {() => {setDomov("S parkovaním")}}
      
      onMouseEnter={() => setHover(6)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 6 ? "var( --farba-main2)" : "transparent"
          }}
      > <i class='bx bx-car'></i>
      
      </Lenikona>
       {hover === 6 && <Textyheader
        style={mitotStyle}
        >S parkovaním</Textyheader>}
      </div> */}


        <div style={obal}> 

          <Lenikona  
          ref={posledny}
          onClick = {() => {setDomov("mestke")}}
          onMouseEnter={() => setHover(9)}
          onMouseLeave={() => setHover(null)}
          style={{
            backgroundColor: hover === 9 ? "var( --farba-main2)" : "transparent"
          }}
          > <i class='bx bx-building-house'></i>
        {hover === 9 && <Textyheader
        style={mitotStyle}
        >Mestské</Textyheader>}

          </Lenikona>
        </div>
      


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
