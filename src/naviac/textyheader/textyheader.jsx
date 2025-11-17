import React from 'react'
import './textyheader.css'
import { motion } from 'framer-motion'

const Textyheader = ( {children,style}) => {
  return (
    <div className='Textyheader'
style={style}
  initial={{ opacity: 0, y: 0 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -5 }}
  transition={{ duration: 0.3 }}
    >
      {children}
    </div>
  )
}

export default Textyheader
