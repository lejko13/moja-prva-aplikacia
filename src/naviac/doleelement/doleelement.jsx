import './doleelement.css'
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'
import React, { useState, useRef,useContext,useEffect } from 'react';
import Impulz from '../impulz/impluz'
import { motion, AnimatePresence, color } from 'framer-motion';
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import Texticek from '../texticek/texticek'
import { use } from 'react';
import { useNavigate } from "react-router-dom";

import Ceny from '../ceny/ceny'
const Doleelement = ({pocitam,setPocitam}) => {
  const[open,setOpen] = useState(false)
  const [otocene, setOtocene] = useState(false);
  const[hostia,setHostia] = useState(1)


  const[penaze,setPenaze] = useState(null)
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const plusDO = useRef(null)
  const minusDO = useRef(null)

  const plusDE = useRef(null)
  const minusDE = useRef(null)




  const reference = useRef(null);
  const tlacidlo = useRef(null);
  const menucko = useRef(null)
  const navigate = useNavigate();

 const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,setInfo,scrollToRef,
             informacie,hodnotenie,majitel,otazky,doplnok,popokno,setPopokno
             ,ceny,setCeny, dospeli,setDospeli,deti,setDeti,batolata,setBatolata,

             setPresun,presun
           } = useContext(GlobalContext);



const funkcia = () => {
    setOtocene((prev) => !prev); // prepína true/false

    if (reference.current) {
      reference.current.style.transition = "transform 0.3s ease";
      reference.current.style.transform = !otocene
        ? "rotate(180deg)"
        : "rotate(0deg)";
    }
  }



// nvskjvnksjavnkjavnkjvjkav ajsk

    
  useEffect(() => {
    if (!penaze) return

    const kar = (e) => {
    if (
      tlacidlo.current && !tlacidlo.current.contains(e.target) &&
      menucko.current && !menucko.current.contains(e.target)
    ) {
      setPenaze(false);
      
    }
  };
  
  window.addEventListener('click',kar)
  return () => window.removeEventListener('click',kar)
      
  },[penaze])

// nvskjvnksjavnkjavnkjvjkav ajskvhnjskdbvhjsbvhjsbvnmsvdsvjkscmvejtcbjtrebmjkxrtmjkerjkbtmnrkjetbne
  const prisli = (value,dva) => {
  setPocitam(prev => prev + dva)
  setHostia(prev => prev + value)
}

const dospelaci = (value) => {
  setDospeli(prev => prev + value)
  
}
const deturecne = (value) => {
  setDeti(prev => prev + value)
  
}
const batolce = (value) => {
  setBatolata(prev => prev + value)
  
}
// nvskjvnksjavnkjavnkjvjkav ajsk
// useEffect(() => {
//    if (!plusDO.current || !plusDE.current) return; 


//   if (hostia >= 5) {
//     plusDO.current.style.pointerEvents = "none";
//     plusDE.current.style.pointerEvents = "none";
   
//   } else {
//     plusDO.current.style.pointerEvents = "auto";
//     plusDE.current.style.pointerEvents = "auto";
//   }
// }, [hostia]);

// useEffect(() => {

//   if (!minusDE.current)  return;
    
  
//   if (deti === 0 ) {
//       minusDE.current.style.pointerEvents = "none";
//   }else{
//      minusDE.current.style.pointerEvents = "auto";
//   }

// },[deti])

  
// nvskjvnksjavnkjavnkjvjkav ajsk
  useEffect(() => {
    if (hostia === 7 ) {
      console.log("konec");
    }
  },[hostia])


// nvskjvnksjavnkjavnkjvjkav ajskvhnjskdbvhjsbvhjsbvnmsvdsvjkscmvejtcbjtrebmjkxrtmjkerjkbtmnrkjetbne


useEffect(() => {
  if (!otocene) return


     const handleClickOutside = (e) => {
    if (
      menuRef.current && !menuRef.current.contains(e.target) &&
      buttonRef.current && !buttonRef.current.contains(e.target)
    ) {
      funkcia();
      
    }
  };
  
  window.addEventListener('click',handleClickOutside)
  return () => window.removeEventListener('click',handleClickOutside)

},[otocene])

const stylik = {
  backgroundColor:"red"
}
const icon = {
  fontSize:"18px",
  color:"var(--farba-cierna)"
}




// const posielam = {
//   dospeli: dospeli,
//   deti: deti,
// }


 const otvorProjekt = () => {

    setPresun(prev => [...prev, { dospeli, deti }]);
    navigate('/Rezervacie');
  };


  const vymazat = () => {

setDospeli(1)
setDeti(0)
setBatolata(0)
  }
  return (
    
     <div className='komponnetntet'>
         
                  <div className='horeElemenet'>  

                    <Impulz><i class='bx bx-check'></i></Impulz>
                    <div style={{
                      width:"80%",
                      height:"100%",
                      display:"flex",
                  flexDirection: "column" ,
                      // backgroundColor:"red"
                    }}>
                   <p style={{fontSize:"var( --font-size-base4)",color:"var(--farba-cierna)"}}>Zriedkavo voľné! </p>

                      <span style={{fontSize:"var( --font-size-base2)",color:"var(--farba-cierna)"}}> Toto ubytovanie je zvyčajne rezervované.</span>
                      </div>
                  </div>

                  <div className='doleElemenet'>
                    
                    
                 
                    <div className='textceklencos'>

                      <AnimatePresence>
                      {penaze &&     <Ceny
                         ref={menucko}
                
                      ></Ceny>
                      
                          }
                          </AnimatePresence>
                    
                      <span  
                      ref={tlacidlo}
                    
                      id='cena'
                    onClick={() => {
                      setPenaze(prev => !prev)}}
                      style={{fontSize:"var(--font-size-large)",textDecoration:"underline",cursor:"pointer"}}
              
                      >€{pocitam}</span>
                      
                      <span  style={{fontSize:"var( --font-size-base2)",color:"var(--farba-sivaText)"}}>za 2 noci</span>


                    </div>
                    <div className='vyber'>

                        <div className='horepocet'>
                            <div className='horehorrehroe'>
                                <div className='rovnaka'>
                                    <Texticek
                                hore = "Prichod"
                                dole = "9.10.2025"
                                 ></Texticek></div>
                                <div className='rovnaka2'>
                                    <Texticek
                                hore = "Prichod"
                                dole = "9.10.2025"
                                ></Texticek></div>

                            </div>
                            <div className='doledoledoel'>

                                <button 
                                ref={buttonRef}
                                className='mojButton'
                                  onClick={funkcia}>
                                    <Texticek
                                    hore ="Hostia"
                                    dole = {hostia}
                                    ></Texticek>
                                <div><i  ref={reference} class=' ikona bx bx-chevron-down' ></i></div>
                              

                                </button>
                                <AnimatePresence>
                                {otocene && 
                                
                                  <motion.div
                                  ref={menuRef}
                                    initial={{ opacity: 0, y: 0 }}       // začiatok: neviditeľný, mierne posunutý dole
                                    animate={{ opacity: 1, y: 0 }}        // po zobrazení: plná viditeľnosť, v pozícii
                                    exit={{ opacity: 0, y: 0 }}          // pri miznutí: späť dole a vyblednutie
                                    transition={{ duration: 0.2, ease: "easeInOut" }} 
                                    style={{
                                        top:"65px",
                                        left: "-1px",                 // horizontálne na stred
                                        height:"fit-content",
                                        zIndex:"10",
                                        width: "calc(100% + 2px)", 
                                        backgroundColor:"var(--farba-biela)",
                                        padding:"10px",
                                        borderRadius:"10px",
                                        display:"flex",
                                        gap:"5px",
                                        border:"var( --border)",
                                        flexDirection:"column",
                                        position:'absolute'
                                    }}// plynulý prechod
                                    >
                                      <div className='skuskazas'>
                                         <Texticek
                                        hore ="Dospelí"
                                        dole ="Vek 13 r. a viac"
                                        eurovky = {5}
                                        penaze  = {"€"}
                                        loitko = {"/"}
                                        horetextuic = {{fontSize:"var(  --font-size-base)"}}
                                        ></Texticek>
                                       
                                        <div className='drzaknapocty'>
                                           <div className='renerecek'>
                                            <Ukazovatelko
                                            ref={minusDO}
                                            
                                             onClick={() => { prisli(-1,-5); dospelaci(-1); }}
                                             disabled={dospeli <= 0}
                                           
                                            >
                                            <i class='bx bx-minus'style = {icon} ></i>
                                            </Ukazovatelko>
                                           </div>
                                          <div className='dizsplejko'>{dospeli}</div>
                                           <div className='renerecek'>
                                              <Ukazovatelko 
                                                ref={plusDO}
                                             onClick={() => { prisli(+1,+5); dospelaci(+1); }}
                                              disabled={hostia >= 5}

                                            
                                              ><i class='bx bx-plus'style = {icon}></i></Ukazovatelko>
                                           </div>
                                        </div>

                                      </div>
                                      {/* hsjfsjbfjsa */}
                                      <div className='skuskazas'>
                                         <Texticek
                                        hore ="Deti"
                                        dole ="Vek 2 – 12 r."
                                        eurovky = {5}
                                        penaze  = {"€"}
                                        loitko = {"/"}
                                        horetextuic = {{fontSize:"var(  --font-size-base)"}}
                                        ></Texticek>
                                        <div className='drzaknapocty'>
                                           <div className='renerecek'>
                                                 <Ukazovatelko
                                                 ref={minusDE}
                                                 disabled={deti <= 0}
                                                     onClick={() => { prisli(-1,-5); deturecne(-1); }}
                                                 ><i class='bx bx-minus'style = {icon} ></i></Ukazovatelko>
                                           </div>
                                          <div className='dizsplejko'>{deti}</div>
                                           <div className='renerecek'>
                                                 <Ukazovatelko
                                                 ref={plusDE} disabled={hostia >= 5}
                                                  onClick={() => { prisli(+1,+5); deturecne(+1); }}
                                                 
                                                 ><i class='bx bx-plus'style = {icon}></i></Ukazovatelko>
                                           </div>
                                        </div>



                                      </div>
                                          {/* hsjfsjbfjsa */}
                                      <div className='skuskazas'>
                                         <Texticek
                                        hore ="Batoľatá"
                                        dole ="Do veku 2 r."
                                        eurovky = {5}
                                        penaze  = {"€"}
                                        loitko = {"/"}
                                        horetextuic = {{fontSize:"var(  --font-size-base)"}}
                                        ></Texticek>
                                        <div className='drzaknapocty'>
                                           <div className='renerecek'>
                                                 <Ukazovatelko
                                                 disabled={batolata <= 0}
                                                    onClick={() => { prisli(-1,-5); batolce(-1); }}
                                                 ><i class='bx bx-minus'style = {icon} ></i></Ukazovatelko>
                                           </div>
                                          <div className='dizsplejko'>{batolata}</div>
                                           <div className='renerecek'>
                                            
                                                 <Ukazovatelko
                                                 disabled={hostia >= 7}
                                                 onClick={() => { prisli(+1,+5); batolce(+1); }}
                                                 >
                                                  <i class='bx bx-plus'style = {icon}></i></Ukazovatelko>
                                           </div>
                                        </div>

                                      </div>
                                      

                          

                                    
batolce

                                    
                                  
                                
                                    </motion.div>
                                  
                                    }
                                    </AnimatePresence>

                            </div>
                        </div>
                        <div className='dolebutton'>
                            <button className='buttnosrezervace2'>Bezplatne storno</button>
                            <button 
                            onClick={() => {
  setPopokno(true);
  otvorProjekt();
  vymazat()
}}
                           
                            className='buttnosrezervace'>Rezervovať</button>
                            <p style={{
                                fontSize:"var( --font-size-base69)",
                                    color: "var( --farba-sivaText)"
                            }}>Zatiaľ nebudete nič platiť.</p>
                        </div>

                    </div>
                   


                  </div>
                  <div 
                  style={{width:"100%",height:"fit-content",display:"flex",alignItems:"center",justifyContent:"center",
                          color:"var(--farba-sivaText)",cursor:"pointer",textDecoration:"underline"}}>
                   <span><i  class='bx bx-help-circle'></i></span>
                   <span>Nahlásiť túto ponuku</span>
                   </div>
             
                </div>
   
  )
}

export default Doleelement
