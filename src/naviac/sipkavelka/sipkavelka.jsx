import './sipkavelka.css'

import React from 'react'

const Sipkavelka = ({children,onMouseLeave,onMouseEnter,style,onClick}) => {
  return (
    <div className='Sipkavelka'
    style={style}
    onClick={onClick}
    onMouseLeave={onMouseLeave}
    onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  )
}

export default Sipkavelka
