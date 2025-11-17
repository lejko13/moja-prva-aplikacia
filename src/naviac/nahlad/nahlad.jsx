import './nahlad.css'
import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel,Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hodnotenie from '../hodnotenie/hodnotenie';
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import { useNavigate } from 'react-router-dom';

import Pridanie from '../pridanie/pridanie'

import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'

import Card from '../../naviac/portalpop/portalpop'



const Nahlad = ({ nazov, location, hodnotenie, krajina, fotky = [],style, kontrola,prepinam ,apartman,setOtvorenie,setFarba,setQuery,otvorenie}) => {
  const swiperRef = useRef(null);
  const[hover,setHover] = useState(false)
    const navigate = useNavigate();
   const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno} = useContext(GlobalContext);

    const klik = () =>  navigate('/StrankaProjekt', { state: apartman });





  return (
    
 
      <motion.div
      style={style}
        className='Nahlad'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        
         
      >
        <div className='fotkaNahlad'>
         {!kontrola &&  
         <div className='wrapperprecelok'
         onClick={() => {klik() ,setFilter(false)}}
         >
          
          <Pridanie
  onClick={(e) => {
    setPopokno(true)
    e.stopPropagation();   
    console.log(popokno);                // zastaví bublanie
    setPocetOblubene(prev => prev + 1);   // tvoja pôvodná funkcia
  }}
  setHover={setHover}
/>
          <div 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            height:"100%",
            transition:"var(--transition)",
            opacity:"1",
            zIndex:"2",
            position:"absolute",
            width:"100%",
            backgroundColor: hover=== true ?"var(  --farba-bielaEfekty)" : "transparent"
          }}></div>
         <img className='obrazocekok2'
        style={{
    transition: "transform 0.3s ease", // hladka animacia
    transform: hover ? "scale(1.05)" : "scale(1)" // mierne zväčšenie pri hover
  }}
          src={fotky[0]}   />
         </div>}

          {kontrola &&   <Swiper
        
            
            onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay, Mousewheel,Virtual]}
              pagination={{ clickable: true }}
              spaceBetween={10}
                  virtual
              mousewheel={{ forceToAxis: true, releaseOnEdges: true, invert: false, sensitivity: 1 }}
             
            >

              {fotky?.map((foto, index) => (
                <SwiperSlide key={index} virtualIndex={index} className='slideSwipeer' style={{ position: "relative" }}>
                  <div style={{ position: "relative", display: "flex" }}>
                    <img className='obrazocekok' src={foto} alt={`foto-${index}`} />
                  </div>
                </SwiperSlide>
              ))}

              <div  className='spikecakk2'
           onClick={() => swiperRef.current?.slidePrev()}
              >
                <i className='bx bx-chevron-left'></i>
              </div>

              <div className='spikecakk'
             onClick={() => swiperRef.current?.slideNext()}
              >
                <i className='bx bx-chevron-right'></i>
              </div>

            </Swiper>}
          
           
          
        </div>

        <div className='textNahlad'>
          <div className='textHore'>
            <span className='textNazov' 
            onClick={() => {
  if (otvorenie) {
    setOtvorenie(false);
    setFarba(false);
    setQuery("");
  }
  klik();
  setFilter(false)
}}
          >
              {nazov}</span>
            <Hodnotenie text={hodnotenie} />
          </div>
          <div className='textDole'>
            <div style={{ display: "flex", gap: "5px" }}>
              <i style={{ color: "var(--farba-sivaText)" }} className='bx bx-been-here'></i>
              <span className='textLokacia'
                style={{ whiteSpace: 'nowrap', fontSize: "var(--font-size-base2)", color: "var(--farba-sivaText)" }}
              >
                {location}
              </span>
            </div>
            <span style={{ whiteSpace: 'nowrap', fontSize: "var(--font-size-base3)", color: "var(--farba-sivaText)" }}>
              {krajina}
            </span>
          </div>
        </div>
      </motion.div>


  )
}

export default Nahlad;
