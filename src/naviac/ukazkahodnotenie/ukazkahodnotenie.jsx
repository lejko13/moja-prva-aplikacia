import React from 'react'
import './ukazkahodnotenie.css'

const Ukazkahodnoteie = ({cislo,co,ikona,onClick}) => {
  return (
    <div className='Ukazkahodnoteie' onClick={onClick}>
        <div style={{
            fontSize:"20px",
            display:"flex",
            gap:"5px",
            alignItems:"center",
            fontWeight:"550",
          
            justifyContent:"start",

            // backgroundColor:"green"
        }}>
        <span>{cislo}</span>
        <span style={{
            display:"flex",
            fontSize:"15px",
            alignItems:"center",
            justifyContent:"start",

        }}>{ikona}</span>
        </div>
        <span style={{fontSize:"var( --font-size-small)",color:"var(--farba-sivaText)"}}>{co}</span>
      
    </div>
  )
}

export default Ukazkahodnoteie
