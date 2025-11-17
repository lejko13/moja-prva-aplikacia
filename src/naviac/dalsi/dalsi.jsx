import './dalsi.css'
import React from 'react'

const Dalsi = ({fotka,meno,priezvisko,popisek,onClick}) => {
    
  return (
    <div className='Dalsi'>
        <div className='fotkeckako'>
            <div className='hovercover' onClick={onClick}></div>
            <img className = "fototto"src={fotka} alt="" />
        </div>
        <div style={{display:"flex",height:"100%",width:"200px",flexDirection:"column"}}>
            <div style={{fontSize: "var(--font-size-base4)",display:"flex",gap:"5px"}}>{meno} {priezvisko}</div>
            <div style={{fontSize: "var(--font-size-base2)"}}>{popisek}</div>
        
         
        </div>
      
    </div>
  )
}

export default Dalsi
