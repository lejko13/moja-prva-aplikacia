import React, { useContext, useState } from 'react';
import { motion, AnimatePresence, color } from "framer-motion";
import { createPortal } from 'react-dom';
import { GlobalContext } from '../../naviac/reactcontext/reactcontext';
import './owelap.css';
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko';

const Owerlap = ({ children,style }) => {
  const [hoverecek, setHoverecek] = useState(null);
  const { teraz, seTeraz } = useContext(GlobalContext);

  return createPortal(
    <AnimatePresence>
      {/* AnimatePresence potrebuje, aby bol komponent stále v DOM počas exit animácie */}
      {teraz && (
        <motion.div
          onClick={() =>seTeraz(false)}
          className="Owerlap"
          style={style}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
         
        >
          <div className='obsahtOwerlap' onClick={e => e.stopPropagation()}>
         <Ukazovatelko
            onClick={() =>seTeraz(false)}
              onMouseEnter={() => setHoverecek(1)}
              onMouseLeave={() => setHoverecek(null)}
              style={{
                 zIndex: 300, 
                color:"var(--farba-cierna)",
                backgroundColor: hoverecek === 1 ?"transparent" : "var(--farba-main2)",
                position: "fixed",
                top: "20px",
                right: "20px"
              }}
         ><i class='bx bx-x'></i></Ukazovatelko>
            

       {children}
            
     
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Owerlap;
