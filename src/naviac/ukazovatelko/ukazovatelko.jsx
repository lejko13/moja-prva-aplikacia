import './ukazovatelko.css'
import React, { forwardRef } from 'react'

const Ukazovatelko = forwardRef(({ style, onMouseEnter, onMouseLeave, onClick, children,disabled }, ref) => {
  return (
    <button
    disabled={disabled}
      ref={ref}   // ✅ odovzdáme ref ďalej
      className='Ukazovatelko'
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  )
})

export default Ukazovatelko
