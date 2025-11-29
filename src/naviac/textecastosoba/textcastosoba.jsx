import './textcastosoba.css'

import React from 'react'

const Textcastosoba = ({textmain,text2,styletextu}) => {
  return (
    <div className='texticekostki'>
      <p className='textxicekkokoko' style={styletextu} >{textmain}</p>
      <span>{text2}</span>
      
    </div>
  )
}

export default Textcastosoba
