import React, { Children } from 'react'
import './zobrazenieuctu.css'
import Ukazkahodnoteie from '../ukazkahodnotenie/ukazkahodnotenie'
import Linka from '../linka/linka'

import { MdOutlineVerifiedUser } from "react-icons/md";
const Zobrazenieuctu = ({meno,titul,fotka,priezvisko,children}) => {
  return (
  
        <div className='Zobrazenieuctu'>
            <div className='jednotakk'>

                <div style={{position:"relative",height:"fit-content",width:"fit-content"}}>
                <div className='ikonabodkaa'><MdOutlineVerifiedUser /></div>
                <div className="tvojaklasicka">
                    <img  className = "foteckaoko"src={fotka} alt="" />
                

                </div>
                </div>
        <div style={{ display: "flex", flexDirection: "column",alignItems:"center" }}>
                    <p style={{ display: "flex", gap: "5px" }}>
                        <span style={{fontSize:"var(--font-size-base4)"}}>{meno}</span>
                        <span style={{fontSize:"var(--font-size-base4)"}}>{priezvisko}</span>
                    </p>
                    <p style={{fontSize:"var(--font-size-base2)",color:"var(  --farba-sivaText)"}}>{titul}</p>
                </div>
            </div>
            <div className='dvaojkk'>
                {children}
               
            </div>
        
        </div>
    
  )
}

export default Zobrazenieuctu
