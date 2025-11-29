import './ikonaMobil.css'

import React from 'react'

const IkonaMobil = ({ikona,text,style,stylecek,onClick}) => {
  return (
    <div className='IkonaMobil'
    onClick={onClick}
    >
        <div  className = "ikkoonnaa" style={style}>{ikona}</div>
        <div  className = "ikonaaaaloca" style={stylecek}>{text}</div>
      
    </div>
  )
}

export default IkonaMobil
