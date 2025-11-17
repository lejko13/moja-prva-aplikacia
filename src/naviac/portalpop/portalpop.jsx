import './portalpop.css';
import React, { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalContext } from '../reactcontext/reactcontext';

import Impulz from '../../naviac/impulz/impluz'

const Card = ({nadpis,ikona}) => {
  const { popokno, setPopokno } = useContext(GlobalContext);
  const portalRoot = document.getElementById('portal');
  const timeoutRef = useRef(null); // tu uložíme timeout

  if (!portalRoot) return null;

  const zacatek = () => {
    timeoutRef.current = setTimeout(() => {
      setPopokno(false);
    }, 2000);
  };

  const kar = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (popokno) {
      zacatek(); // spusti timeout keď sa popokno otvorí
    }
    return () => kar(); // cleanup pri unmount alebo zmene popokno
  }, [popokno]);

  return createPortal(
    <AnimatePresence>
      {popokno && (
        <motion.div 
          className="portal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="notifications-container"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onMouseEnter={kar}   // stop timeout pri hover
            onMouseLeave={zacatek}           // znova spusti po odchode myši
          >
            <div className="success">
              <div className="flex">

                <Impulz><i class='bx bx-check' ></i></Impulz>
                
                <div className="success-prompt-wrap">
                  <p  className="success-prompt-heading">
                    {nadpis}
                    <span style={{fontSize:"20px"}}className="checkmark">{ikona}</span>
                  </p>
                  <div className="success-prompt-prompt">
                    <p>
                      You're happy now? Does this impulsive action really satisfy you? 
                      Anyway, your party-size pizza combo is on its way.
                    </p>
                  </div>
                  <div className="success-button-container">
                    <button className="success-button-main" type="button">Zisiť viac</button>
                    <button 
                      className="success-button-secondary" 
                      type="button"
                      onClick={() => setPopokno(false)}
                    >
                    Zrušiť
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalRoot
  );
};

export default Card;
