import './nepomenujem.css'

import React, { Children } from 'react'

const Nepomenujem = ({ikona,text,style,children}) => {
  return (
    <div className='Nepomenujem' style={style}>
    {children}
        <div>{ikona}</div>
        <div style={{fontSize:"var(--font-size-base69)"}}>{text}</div>
      
    </div>
  )
}

export default Nepomenujem
