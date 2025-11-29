import React, { useState } from 'react'
import './pridanie2.css'
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
const Pridanie2 = ({setHover,onClick}) => {
    const[hover2,setHover2] = useState(false)
  return (
    <div className='obalLen'
    onClick={onClick}
    onMouseEnter={() => {
        setHover2(true)
        setHover(true)
    }}
    onMouseLeave={() => {
        setHover2(false)
        setHover(false)
    }}
  
    >
        {/* <Ukazovatelko
        style={{ 
            fontSize: "18px",
        backgroundColor: hover2  ? "transparent" : "var(--farba-bielaEfekty" }}
        >
            <i  class='bx bx-heart' style={{color:"var(--farba-cierna)"}}></i>
            

        </Ukazovatelko> */}
      
    </div>
  )
}

export default Pridanie2
