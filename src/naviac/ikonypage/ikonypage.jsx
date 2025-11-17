import './ikonypage.css'

import React from 'react'

const Ikonypage = ({ikona,text,onMouseLeave,onMouseEnter,onClick,style,textStyle,ikonastyle}) => {
  return (
    <div className='Ikonypage'
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    style={style}
    >
        <div className='ikonavelkost' style={ikonastyle}>{ikona}</div>
        <div className='ikonatexcike' style={textStyle} >{text}</div>
      
    </div>
  )
}

export default Ikonypage
