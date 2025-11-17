import './maincast.css'

import React, { useRef, useEffect, useState } from 'react'


import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel,Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hodnotenie from '../../naviac/hodnotenie/hodnotenie'
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'
import Nahlad  from '../../naviac/nahlad/nahlad'
import {apartmany} from '../../naviac/fuzzy/fuzzy'

import { ikonyPonuk } from "../../naviac/ponuka/ponuka";
const Maincast = ({text,data = [],malytext}) => {
 const swiperRef = useRef(null);

    
  return (
    <div className='Maincast'>
        <div className='textCastmain'>
          <div>
            <span className='TEXTICEKNEAOVICEK' style={{ fontWeight:"550",}}>{text}</span>
            <p className='textpodhlavnuym'>{malytext}</p>
            </div>
            <div className='pohybac'>

              <div  className='spikecakk2'
               style={{
                zIndex:"1",
                position:"relative"

            }}
           onClick={() => swiperRef.current?.slidePrev()}
              >
                <i className='bx bx-chevron-left'></i>
              </div>

              <div className='spikecakk'
              style={{
                zIndex:"1",
                 position:"relative"

              }}
             onClick={() => swiperRef.current?.slideNext()}
              >
                <i className='bx bx-chevron-right'></i>
              </div>
            </div>
        </div>
       
       <div className='swipereceobal'>
        <Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  modules={[Navigation, Pagination, Autoplay, Mousewheel, Virtual]}
  observer={true}
  observeParents={true}
  resizeObserver={true}     // 🔥 toto pridaj
  spaceBetween={10}
  slidesPerView={5.5}
  // virtual
  preventInteractionOnTransition={true}
  touchStartPreventDefault={true}
  touchMoveStopPropagation={true}
  breakpoints={{
    320: { slidesPerView: 1.5, spaceBetween: 5 },
    480: { slidesPerView: 2.5, spaceBetween: 8 },
    768: { slidesPerView: 4, spaceBetween: 10 },
    1294: { slidesPerView: 5.5, spaceBetween: 10 },
  }}
  mousewheel={{
    forceToAxis: true,
    releaseOnEdges: false,
    invert: false,
    sensitivity: 1,
  }}
>

                {data.map((prev,index) => (
            <SwiperSlide  key={prev.id} virtualIndex={index}>
        
                <Nahlad
                style={{
                 
                    padding:"0px",
                    width: "100%",
                    height:"100%",
                }}
                   kontrola = {false}
                  //  prepinam = {}
                   
                fotky = {prev.fotky}
                apartman={prev}
                nazov = {prev.name}
                location = {prev.location}
                hodnotenie = {prev.hodnotenie}

            ></Nahlad> 
 
     
            </SwiperSlide>
                ))}
            
                            
                                
                                
                                        </Swiper>
                                        </div>
      
    </div>
  )
}

export default Maincast

  