import './hybemkomponent.css'
import React, { useState } from 'react';
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import { color } from 'framer-motion'

const Hybemkomponent = ({ onClick, zvacseny,texthore,odpoved }) => {

  

  const styilik = {
   
  height: "60px",
  width: "100%",
  backgroundColor: "var(--farba-biela)",
  opacity: "1",
  padding:"20px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  textAlign: "center",
  color:"var(--farba-cierna)",
  fontSize:"var(  --font-size-base)"
}
  const styilik2 = {
   
  height: "60px",
  width: "100%",
  backgroundColor: "var(--farba-biela)",
  opacity: "1",
  padding:"20px",
    fontSize:"var(  --font-size-base2)",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  textAlign: "center",
  color:"var(--farba-sivaText)"
}
  
  return (
    <div
      style={{
     overflow: "hidden",
     border:"var( --border)",
        height: zvacseny ? '115px' : '60px',
        backgroundColor: 'red',
        transition: 'height 0.4s ease',
        width: '100%',
        cursor:"pointer",
        borderRadius:"var(--border-radius-maly)",
        position:"relative",
        
      
      }}
    >
      <div onClick={onClick} style={{display:"flex",flexDirection:"column"}}>
       <div style={styilik }>{texthore}</div>
       <div style={styilik2}>{odpoved}</div>
       
        

       <Ukazovatelko
       style ={{
        top:"17px",
        backgroundColor: zvacseny ? "var(--farba-main)" : "var(--farba-siva)",
        right:"10px", 
              cursor:"pointer",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
        transition:"var(--transition)",
        position: "absolute"
      
       }}
       >
        <div> <div>
  {zvacseny  ? <i class='bx bx-chevron-up' ></i> : <i class='bx bx-chevron-down' ></i>}
</div>


          
      </div>
       </Ukazovatelko>
      </div>
    </div>
  )
}

export default Hybemkomponent
