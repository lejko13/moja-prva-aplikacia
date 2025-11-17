import './templatepage.css'
import { AnimatePresence, motion } from "framer-motion";
import React from 'react'

const Templatepage = ({children}) => {
  return (

    <motion.div
         className='StrankaProjekt'
         initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // plynulosť
      
       >
         <div className='hlavnapaage'>
          <div style = {{
            width:"100%",
            height:"100%",
            // padding:"100px 0px 0px 0px",
            backgroundColor:"var(--farba-biela)"
          }}>
{children}
          </div>
            

         </div>
       </motion.div>
    
  )
}

export default Templatepage
