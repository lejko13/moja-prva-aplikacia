import './komponenta.css'

import Ikonypage from '../../naviac/ikonypage/ikonypage'
import { AnimatePresence } from 'framer-motion';

import Lenkukazka from '../lenukazka/lenkukazka'
import React, { useState, useRef,useContext, useEffect, forwardRef } from 'react';
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'
const Komponenta = ({nazov,textikona,kvak,text,children,doleziet,linktext,kliknutie,stylececek,kluc,unikat,desing,dizajnicek,zobrazenie}) => {

   const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,setInfo,scrollToRef,informacie,hodnotenie,majitel,otazky,
       vidim,setVidim,
    } = useContext(GlobalContext);
    const[hover,setHover] = useState(null)

  
    

    
const text1 = useRef(null)
  return (
    <div className='Komponenta'>

       <div className="nazov-text" style={dizajnicek}>{nazov}</div>

      
        <div  style = {doleziet}className='textovacastitk'  >{text}</div>
         {children}
         
         <div class="tvoj-prvok"  style={desing}>
        <Ikonypage
        onClick={kvak}
        onMouseEnter={() => setHover(1)}
              onMouseLeave={() => setHover(null)}
        ikona = {<i class='bx bx-info-circle'></i>}
        style={{ 
          height:"45px",
         cursor: "pointer",
                 backgroundColor: hover === 1 ? "var(--farba-main2)" : "var(--farba-main)"
                //  backgroundColor: hover === 1 ? "var(--farba-main2)" : "transparent"
        }}
         textStyle={{color: hover === 1 ? "var(--farba-sivaText)" : "var(--farba-biela)"}}
        ikonastyle = {{color: hover === 1 ? "var(--farba-sivaText)" : "var(--farba-biela)"}}
        text = {textikona}
        ></Ikonypage>
        <div className='pustac' style={stylececek}>
        
     
        <p className='texticeupozornenei'  ref={unikat}   style = {zobrazenie}onClick={kliknutie}>{linktext}</p>
        
        
 

        </div>

        
        
       
        </div>
                         
                       
                   
                   
                       
                   
     
    </div>
  )
}

export default Komponenta



            