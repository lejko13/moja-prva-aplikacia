import './tabulecak.css'

import React from 'react'
import Star from '../../naviac/star/star'
const Tabulecak = ({hodnoteie,hosnoteniepocet,lozka,kupelna,nazov,cislo,ohod,onClick}) => {
  return (
    <div className='Tabulecak'>
       
       <div className='lavastrana'>
        <div style={{color:"var(--farba-cierna)",fontSize:"var( --font-size-base4)"}}>
        <span>Celý objekt:</span>
        <span>{nazov}</span>
        </div>
            <div style={{color:"var(--farba-sivaText)",fontSize:"var( --font-size-base2)",display:"flex" ,gap:"5px"}}>
          <span>{hosnoteniepocet}</span>
            <span>{hodnoteie}</span>
          <span>{lozka}</span>
            <span>{kupelna}</span>
            </div>
       </div>
       <div className='pravastrana'>
        <div className='tabulececeko'>
            <span style={{fontSize:"var(  --font-size-base4)"}}>{ohod}</span>
                  
                    <span style={{ fontSize: "16px", color: "var(--farba-cierna)" }}>Hodnoteni</span>
        </div>
        
        <div style={{height:"100%",width:"1px",backgroundColor:"var(--farba-siva)",}}></div>
        
        <div className='tabulececeko'
        onClick={onClick}
       
        >
            <span style={{fontSize:"var(  --font-size-base4)"}}>{cislo}</span>
                  <Star style={{ fontSize: "13px", color: "var(--farba-cierna)" }} />
        </div>

       </div>
       
      
      
    </div>
  )
}

export default Tabulecak
