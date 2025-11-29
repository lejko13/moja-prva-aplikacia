import './lenikona.css'
import React, { forwardRef } from 'react'

const Lenikona = forwardRef(({ children, onMouseEnter, onMouseLeave, style, onClick }, ref) => {
  return (
    <div
      className='Lenikona'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </div>
  )
})

export default Lenikona
