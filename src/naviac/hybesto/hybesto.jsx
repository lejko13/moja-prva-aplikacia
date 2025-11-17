import './hybesto.css'
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useRef,useContext,useEffect } from 'react';
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'
import {ludia} from '../../naviac/zoznamosoby/zoznamosoby'
import Futertex from '../../naviac/futertext/futertex'
import Buttonhodnotenie from '../../naviac/buttonhodnotenie/buttonhodnotenie'
import Lenhodnotenie from '../../naviac/lenhodnotenie/lenhodnotenie'

import Lenkukazka from '../../naviac/lenukazka/lenkukazka'

import { use } from 'react';


const Hybesto = ({premenna}) => {
  const[novy,setNovy] = useState(false)
  


 const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,setInfo,scrollToRef,informacie,hodnotenie,majitel,otazky,vidim,setVidim,
  } = useContext(GlobalContext);
  const[nastavenie,setNastavenie] = useState([...ludia])

 const najlepsie = () => {
  setNastavenie([...nastavenie].sort((a, b) => b.klientHodnotenieVlaste - a.klientHodnotenieVlaste));
};
 const prvotne = () => {
  setNastavenie([...ludia])
 }
const najnovsie = () => {
  setNastavenie([...nastavenie].sort((a, b) => {
    // rozdelíme deň, mesiac a rok a premeníme na čísla
    const [denA, mesiacA, rokA] = a.klientDatum.split(/\.|\s/).map(Number);
    const [denB, mesiacB, rokB] = b.klientDatum.split(/\.|\s/).map(Number);

    // vytvoríme Date objekty
    const datumA = new Date(rokA, mesiacA - 1, denA);
    const datumB = new Date(rokB, mesiacB - 1, denB);

    // od najnovšieho po najstarší
    return datumB - datumA;
  }));
}
const najhorisie = () => {
  setNastavenie([...nastavenie].sort((a, b) => a.klientHodnotenieVlaste - b.klientHodnotenieVlaste));
};


// Hybesto.jsx


 

  return (
    <div className='Hybesto'>
        <div className='hoteite'>
          
          <div className='tapravcast'>
            <p style={{
              fontSize:"var(--font-size-base4)"
            }}>Hodnotenie</p>
            <span  className='texticekoks'
            
          onClick={() => setVidim(prev => prev ? false : "pica")}
ref={premenna}
            // onClick={() => setVidim("pica")}
            style={{
              cursor:"pointer",
              textDecoration:"underline",
              fontSize:"var(--font-size-small)",
              position:"relative",
              // backgroundColor:"red"
            }}>Ako fungujú hodnotenia </span>
            <AnimatePresence>
            {vidim  === "pica" && <Lenkukazka
            style={{top:"50px",left:"0px"}}
            >Hodnotenia poskytujú cennú spätnú väzbu od predchádzajúcich hostí a pomáhajú budúcim návštevníkom lepšie sa rozhodnúť pri výbere ubytovania. Každé hodnotenie obsahuje informácie o čistote, komunikácii, presnosti popisu a celkovom zážitku z pobytu. Hodnotiť môže iba hosť, ktorý si rezervoval a skutočne využil ubytovanie, čo zabezpečuje pravdivosť a relevantnosť spätnej väzby. Hodnotenia sa zoradia podľa dátumu a kvality, aby najnovšie a najrelevantnejšie recenzie boli ľahko dostupné.</Lenkukazka>}
            </AnimatePresence>

           
        
           

           
        </div>
        <div className='tadruhacast'>
        <Buttonhodnotenie
        najlepsie = {najlepsie}
        prvotne = {prvotne}
        najnovsie = {najnovsie} 
        najhorisie = {najhorisie}

        ></Buttonhodnotenie>
        </div>
        </div>
        <div className='scroolvcasr'>
            {nastavenie.map((prev,index) => (
              <Lenhodnotenie
               texthore = {prev.klientMeno}
                  textdole = {prev.klientPriezvisko}
                  fotka = {prev.klientFotky}
                  datum = {prev.klientDatum}
                  pobyt = {prev.klientMesto}
                  hodnotenie = {prev.klientHodnotenie}
                  hodnota  = {prev.klientHodnotenieVlaste}
              >
              
                  </Lenhodnotenie>
            ))}

        </div>
      
    </div>
  )
}

export default Hybesto
