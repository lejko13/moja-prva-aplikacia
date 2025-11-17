import { color } from 'framer-motion'
import './malytexticek.css'
import React from 'react'

const Malytexticek = ({ikona,text,text2}) => {
    // const stilecek = {
    //     fontSize:"var(  --font-size-base4)"
    //       color:"var(--farba-sivaText)"

    // }
     const stilecek2 = {
        fontSize:"var( --font-size-base69)",
        color:"var(--farba-sivaText)"

    }
  return (
    <div style={{display:"flex",
               color:"var(--farba-sivaText)",
                display:"flex",
                alignItems:"center",
                gap:"10px",
                }}>

        <span style={{fontSize:"20px",display:"flex"}}>{ikona}</span>
        <span style={stilecek2}> {text}</span>
        <span style={stilecek2}>{text2}</span>
    
      
    </div>
  )
}

export default Malytexticek
