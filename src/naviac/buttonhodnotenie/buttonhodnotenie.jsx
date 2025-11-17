import './buttonhodnotenie.css'
import { motion, AnimatePresence } from "framer-motion";

import React, { useState, useRef, useEffect } from 'react';
import { use } from 'react';

const Buttonhodnotenie = ({najlepsie,prvotne,najnovsie,najhorisie}) => {
  const reference = useRef(null);
  const reference2 = useRef(null);
  const textovacast = useRef(null)
  const[text,setText] = useState("Najrelevantnejšie")
  const [otocene, setOtocene] = useState(false); // stav pre otočenie

  const premenna = () => {
    setOtocene(prev => !prev); // toggle
    reference.current.style.transform = `rotate(${!otocene ? 180 : 0}deg)`; 
    reference.current.style.transition = "transform 0.3s ease"; // animácia
  };

const funkcie = (hodnota) => {
  setText(hodnota)
  premenna()
}

useEffect(() => {
    function handleClickOutside(e) {
      // ak kliknem mimo textovacast
     if (
  textovacast.current &&
  reference2.current &&
  !textovacast.current.contains(e.target) &&
  !reference2.current.contains(e.target)
) {
  premenna();
}
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [otocene]);
  return (
    <div className='obalcekk'>
    
    <button className="tlacidlo333" onClick={premenna} ref={reference2}>
  {text}
      <i ref={reference} className='ikona bx bx-chevron-down'></i>
    </button>
<AnimatePresence>
    {otocene && 
     <motion.div
     ref={textovacast}
     className='boxicek'
     initial={{ opacity: 0, y: -5 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: -5 }}
     transition={{ duration: 0.3 }}
    >
      <button className='hoverkobuton'
      onClick={() => {funkcie("Najrelevantnejšie"),prvotne()}}
      >Najrelevantnejšie</button>

      <button className='hoverkobuton'
    onClick={() => {funkcie("Najnovšie"),najnovsie()}}
      >Najnovšie</button>

      <button className='hoverkobuton'
       onClick={() => {funkcie("Najhoršie"),najhorisie()}}
   
      >Najhoršie</button>

      <button className='hoverkobuton'
       onClick={() => {funkcie("Najlepsie"),najlepsie()}}
    
      >Najlepsie</button>
      

    

    </motion.div>
    }
    </AnimatePresence>
   
    </div>
  );
};

export default Buttonhodnotenie;
