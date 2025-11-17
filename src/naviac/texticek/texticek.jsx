import './texticek.css'
import React from 'react'

const Texticek = ({hore,dole,eurovky,horetextuic,penaze,loitko}) => {
  return (
    <div  style={{
        display:"flex",
        gap:"2.5px",

    display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start"
    }}>
      <div style={{
        width:"100px",
          display: "flex",
          flexDirection: "row",
          gap:"5px",
          justifyContent: "flex-start",
          alignItems: "center",
          // backgroundColor:"red"
      }}>
        <span  className = "horebuzno" style={horetextuic}>{hore}</span> 
        <div>
          <span style={{color:"var(--farba-cierna)",fontSize:"var(--font-size-base2)"}}> {loitko}</span>
        <span  style={{color:"var(--farba-cierna)",fontSize:"var(--font-size-base2)"}}>{eurovky}</span>
        <span style={{color:"var(--farba-cierna)",fontSize:"var(--font-size-base2)"}}> {penaze}</span>
        </div>    
        </div>
        <p style={{fontSize:"var(--font-size-small)"}}>{dole}</p>
    </div>
  )
}

export default Texticek
