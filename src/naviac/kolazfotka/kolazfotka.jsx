import './kolazfotka.css'
import React, { useState, useRef,useContext } from 'react';
import Sipkavelka from '../../naviac/sipkavelka/sipkavelka'
import Ikonypage from '../../naviac/ikonypage/ikonypage'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel,Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { GlobalContext } from '../../naviac/reactcontext/reactcontext'

const Kolazfotka = ({fotky = [] ,apartman}) => {
        const swiperRef = useRef(null);
               const[hover,setHover] = useState(null)
         const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz } = useContext(GlobalContext);
  return (
    <div className='Kolazfotka'>
       
    <div style={{display:"flex",gap:"var(--gap-male)",flexDirection:"column"}}>
        <Swiper
          className="mojSwiper"  
            modules={[Navigation, Pagination, Autoplay,Mousewheel]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}  // <-- teraz ref existuje
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            freeMode={true}
              mousewheel={{
            forceToAxis: true, // scrolluje iba horizontálne
            releaseOnEdges: true,
               invert: false,
                  sensitivity: 1, // nastav podľa potreby
              }}
            //    breakpoints={{
            //     350: { slidesPerView: 1.8 },
            //      450: { slidesPerView: 2.2 },
            //       500: { slidesPerView: 2.5 },
            //     750: { slidesPerView: 1.5 },

            //   950: { slidesPerView: 1 },
            //   }}
            // autoplay={{ delay: 3000 }}
            // navigation={true}
            // pagination={{ clickable: true }}
            
   
              >
             
             {fotky.map((prev,index) => (
                <SwiperSlide>
                    <div className='polozka333'>
                        <img  className = "fkokokokok"src={prev} 
                        style={{
                            // borderRadius:"30px"
                        }}
                        alt="" />
                         
                    </div>
                  
                </SwiperSlide>
             ))}
                        <Sipkavelka
                         style={{
                            right:"10px",
                             top: "50%",
                             zIndex:"5",
                            transform: "translateY(-50%)",
                            position:"absolute"
                        }}

                        onClick={() => swiperRef.current?.slidePrev()}
                        ><i class='bx bx-right-arrow-alt' ></i>
                        </Sipkavelka>


                        <Sipkavelka
                        style={{
                            left:"10px",
                             top: "50%",
                             zIndex:"5",
                            transform: "translateY(-50%)",
                            position:"absolute"
                        }}
                        onClick={() => swiperRef.current?.slideNext()}
                        ><i class='bx bx-left-arrow-alt' ></i>
                        </Sipkavelka>
               
             

            
        

            
             
        


            
            </Swiper>
       



         

    
        {/* <div className='textcicekkk'>

            <div className='horeobl'>
          <div>
          <span style={{whiteSpace: 'nowrap', fontSize: "var( --font-size-base4)", color: "var(--farba-cierna)"}}>{apartman.name}</span>
          <div style={{whiteSpace: 'nowrap', fontSize: "var(--font-size-base2)", color: "var(--farba-sivaText)"}}>
            <span>{apartman.krajina} </span>
            <span>{apartman.kraj} </span>
            <span>{apartman.location}</span>
            
            </div>
          
        </div>
        <div className='zazdielam'>
          


          <Ikonypage
          
              onMouseEnter={() => setHover(20)}
              onMouseLeave={() => setHover(null)}
              
            style={{
              cursor: "pointer",
            backgroundColor: hover === 20 ? "var(--farba-main2)" : "transparent"
            }}
              onClick= {() => 

              
                {setPocetOblubene(prev => prev+1),seTeraz(false)

                  // setRandom(<div style={{width:"200px",height:"200px",backgroundColor:"red"}}></div>) ,      
                  // seTeraz(true)
                }}
              ikona = {<i class='bx bx-heart' ></i>}
              text = "Uložiť"
                          ikonastyle = {{ color: hover === 20 ? "var(--farba-cierna)" : "var(--farba-sivaText)",}}
                          
                          textStyle={{
                  color: hover === 20 ? "var(--farba-cierna)" : "var(--farba-sivaText)",
                }}
          ></Ikonypage>
          
          

           


        </div>

        </div>

           
        </div> */}
      </div>
    </div>
  )
}

export default Kolazfotka
