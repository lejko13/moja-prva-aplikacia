import './lenhodnotenie.css'

import React from 'react'
import Linka from '../linka/linka'
import Star from '../../naviac/star/star'
const Lenhodnotenie = ({fotka,texthore,textdole,pobyt,hodnotenie,hodnota,datum,Linkastyle}) => {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
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
        
        <div>
            <div style={{fontSize:"var(--font-size-base69)",color:"var(--farba-sivaText)", display:"flex" , gap:"5px"}}>
              {pobyt}  
              <span>{datum}</span>
              </div>
          <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
            <Star style ={{fontSize:"10px"}}></Star>/
            <span style={{fontSize:"13px",color:"var(--farba-cierna)"}}>{hodnota}</span>
          
          </div>
        </div>
        </div>
      </div>
      <div style={{height:"fit-content",width:"100%",}}>
        <p style={{fontSize:"var(--font-size-base69)"}}>{hodnotenie}</p>
       
        <div style={{padding:"20px 0px"}}>
     <Linka style={Linkastyle}></Linka>
        </div>
      </div>
    </div>
  )
}

export default Lenhodnotenie
