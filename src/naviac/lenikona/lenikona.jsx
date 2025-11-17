import './lenikona.css'

import React from 'react'

const Lenikona = ({children,onMouseEnter,onMouseLeave,style}) => {
  return (
    <div className='Lenikona' onMouseEnter = {onMouseEnter} onMouseLeave={onMouseLeave} style = {style}>

        {children}
      
    </div>
  )
}

export default Lenikona
