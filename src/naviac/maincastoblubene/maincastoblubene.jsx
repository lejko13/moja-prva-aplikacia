import './maincastoblubene.css'

import React, { useRef, useEffect, useState } from 'react'


import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel,Virtual } from 'swiper/modules';
import 'swiper/css';
import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hodnotenie from '../../naviac/hodnotenie/hodnotenie'
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'
import Nahlad  from '../../naviac/nahlad/nahlad'
import {apartmany} from '../../naviac/fuzzy/fuzzy'

import { ikonyPonuk } from "../../naviac/ponuka/ponuka";

import useBreakpoint from '../../naviac/hook/breakpoint'
import Nahlad2 from '../../naviac/nahlad2/nahlad2'

const Maincastoblubene = ({textMobile,textTablet,textDesktop,data = [],malytext,stilikak,stylicecek,lava,prava,textMobileMALY,textTabletMALY,textDesktopMALY,styelcececek}) => {
      const { isMobile,isTablet,isDesktop } = useBreakpoint();
     const swiperRef = useRef(null);
  return (
    <div className='Maincastoblubene'>
      <div className='Maincast2' style = {stylicecek}>
        <div className='textCastmain' style={stilikak}>
          <div>
            <span className='TEXTICEKNEAOVICEK' >  {isMobile ? textMobile : isTablet ? textTablet : textDesktop}</span>
            <p className='textpodhlavnuym' style={styelcececek}> {isMobile ? textMobileMALY : isTablet ? textTabletMALY : textDesktopMALY}</p>
            </div>
            <div className='pohybac'>

              <div  className='spikecakk2'
       ref={lava}
               style={{
                zIndex:"1",
                position:"relative"

            }}
           onClick={() => swiperRef.current?.slidePrev()}
              >
                <i className='bx bx-chevron-left'></i>
              </div>

              <div className='spikecakk'
                ref={prava}
         
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
              slidesPerView={2.2}
               slidesOffsetAfter={20} 
              // virtual
              preventInteractionOnTransition={true}
              touchStartPreventDefault={true}
              touchMoveStopPropagation={true}
              breakpoints={{
                320: { slidesPerView: 2.5, spaceBetween: 10 },
                480: { slidesPerView: 3.1, spaceBetween: 10 },
                550: { slidesPerView: 4.2, spaceBetween: 10},
                850: { slidesPerView: 3.5, spaceBetween: 10},
                930: { slidesPerView: 3.5, spaceBetween: 10 },
                1000: { slidesPerView: 4.5, spaceBetween: 10 },
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
        
                <Nahlad2
                zmaz2 = {{
                    display:"none"
                }}
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
                krajina={prev.krajina}
                hodnotenie = {prev.hodnotenie}

            ></Nahlad2> 
 
     
            </SwiperSlide>
                ))}
            
                            
                                
                                
                                        </Swiper>
                                        </div>
      
    </div>
    </div>
  )
}

export default Maincastoblubene
