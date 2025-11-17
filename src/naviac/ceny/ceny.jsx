import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import './ceny.css'
const Ceny = forwardRef((props, ref) => {
  return (
    <motion.div ref={ref} className='cenyceny'
              initial={{ opacity: 0, y: 20 }}      // začiatok: priehľadný a mierne posunutý dole
          animate={{ opacity: 1, y: 0 }}       // koniec: plne viditeľný a na mieste
          exit={{ opacity: 0, y: 20 }}         // pri miznutí: priehľadný a posunutý dole
          transition={{ duration: 0.3, ease: "easeInOut" }}
    >
     
    </motion.div>
  );
});

export default Ceny
