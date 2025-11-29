import './swiperludia.css'



import Ikonypage from '../../naviac/ikonypage/ikonypage'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay,Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import Futertex from '../../naviac/futertext/futertex'
import Nahlad from '../../naviac/nahlad/nahlad'
import Hybesa from '../../naviac/hybesa/hybesa'
import Hybesto from '../../naviac/hybesto/hybesto'


import React, { useState, useRef,useContext,useEffect, use } from 'react';
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'

import Futertex from '../../naviac/futertext/futertex'
const Swiperludia = ({leletex,nazov,dizajnicek,fotka,texthore,nakliknutie}) => {

   const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,setInfo,scrollToRef,informacie,hodnotenie,majitel,otazky,
       vidim,setVidim,text2,druha,tretia,akotofunugje,klikanec,objekt1,random,setRandom
    } = useContext(GlobalContext);

       const swiperRef = useRef(null);
       const premenna3 = useRef(null)
       
       const[hover,setHover] = useState(null)

       useEffect(() => {
         function handleClickOutside(e) {
           if ((!premenna3.current || !premenna3.current.contains(e.target)) 
           ) {
             setVidim(false);
           }
         }
       
         document.addEventListener("mousedown", handleClickOutside);
         return () => document.removeEventListener("mousedown", handleClickOutside);
       }, [vidim]);
  return (
    <div className='Swiperludia'>
          <div style={{width:"100%",display:"flex", justifyContent: "space-between" ,alignItems:"center"}}>
           <div className="nazov-text" style={dizajnicek}>{nazov}</div>
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
               <Swiper
         
        
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay, Mousewheel]}
              observer={true}
              observeParents={true}
              resizeObserver={true}     // 🔥 toto pridaj
              spaceBetween={20}
              slidesPerView={3}
              //  slidesOffsetAfter={40} 
              // virtual
              preventInteractionOnTransition={true}
              touchStartPreventDefault={true}
              touchMoveStopPropagation={true}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 5 },
                480: { slidesPerView: 2, spaceBetween: 8 },
                768: { slidesPerView: 4, spaceBetween: 10 },
                1294: { slidesPerView: 3, spaceBetween: 30 },
              }}
              mousewheel={{
                forceToAxis: true,
                releaseOnEdges: false,
                invert: false,
                sensitivity: 1,
              }}
            >

                {leletex.map((prev, index) => (
  <SwiperSlide key={`slide-${prev.id}`}>
   <Futertex
   
         stylicek = {{width:"100%" ,border:"none"}}
                  texthore = {prev.klientMeno}
                  textdole = {prev.klientPriezvisko}
                  fotka = {prev.klientFotky}
                  pobyt = {prev.klientMesto}
                popis = {prev.klientHodnotenie}
                hodnota = {prev.klientHodnotenieVlaste}
                popisecek = {prev.klientAkoDlho}
                datum = {prev.klientDatum}
                zobrazit = "Zobrazit Viac"
                onClick = {() => {seTeraz(true),

                                  setRandom(<Hybesa
                                  onClick={() => seTeraz(false)}
                                  >
                                    <Hybesto
                                           premenna={premenna3}
                  

                                    ></Hybesto>


                                  </Hybesa>
                                  )}}
                  >
                    
                  </Futertex>
  </SwiperSlide>
))}
            
                            
                                
                                
                                        </Swiper>

        <div style={{padding:"20px 0px"}}>
            <Ikonypage
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(null)}
            style={{
                height: "45px",
                cursor: "pointer",
                background: hover === 1 ? "var(--farba-main2)" : "var(--farba-main)" // napr. farba, alebo použij backgroundColor
                }}
            textStyle = {{
                color: hover === 1 ? "var(--farba-sivaText)" : "var(--farba-biela)" 
            }}
            text = {"Zobraziť ďalšie hodnotenia"}
            onClick={nakliknutie}
            ></Ikonypage>
        </div>
      
      
    </div>
  )
}

export default Swiperludia
