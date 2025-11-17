import './futertext.css'

import React, { useState } from 'react';

import Hodnotenie from '../../naviac/hodnotenie/hodnotenie'
const Futertex = ({texthore,textdole,fotka,pobyt,popis,hodnota,zobrazit,popisecek,datum,onClick}) => {

  const[zmena,setZmena] = useState(null)
  return (
    <div className='spodokeoko'>
      <div style={{display:"flex",gap:"15px",alignItems:"center"}}>
          <div className='foteckaaahh'>
              <img className = "fotkafotkafotka"src={fotka} alt="" />
          </div>

        <div 
        style={{display:"flex",flexDirection:"column"}}>
              <div style={{display:"flex", gap:"5px",fontSize:"var(--font-size-base)",
           cursor:"pointer",
              color: "var(--farba-cierna)",

              }}>
                <div>{texthore}</div>
                <div  >{textdole}</div>
              </div>
        
      
          <div style={{fontSize:"var(--font-size-base69)",color:"var(--farba-sivaText)"}}>{pobyt}</div>
        </div>
      </div>
      <div style={{display:"flex",gap:"10px", display: "flex",
  flexDirection: "column",

  gap: "10px",
}}>
        

        <div style={{display:"flex",gap:"10px"}}>
          <div className="ellipsis-text" >{popisecek}</div>
          
            <span style={{ transition:"var( --transition)", whiteSpace: 'nowrap' ,fontSize:"var(--font-size-base69)",color: 'var( --farba-sivacierna)',fontWeight:"550"}}>{datum}</span>
                <Hodnotenie text={hodnota}></Hodnotenie>
      
            
           
          
        
      
      </div>
     <div className='textlominkto'>{popis}</div>
</div>
            <span className = "textzobrazit" onClick={onClick}>{zobrazit}</span>
    </div>
  )
}

export default Futertex
