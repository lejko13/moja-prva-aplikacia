import { Children } from 'react'
import './ikony.css'

import React from 'react'

const Ikony = ({ikona,style,onMouseEnter,onMouseLeave,slova,children,onClick}) => {
  return (
    <div className='Ikony'
    style={style}
      onClick={onClick} 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
        <div>{ikona}</div>
     <div style={{ whiteSpace: 'nowrap' ,fontSize:"var(  --font-size-base2)"}}>{slova}</div>
        
    {children}
    </div>
  )
}

export default Ikony
