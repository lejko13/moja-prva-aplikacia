import './textvzorecek.css'

import React from 'react'

const Textvzorecek = ({nazov,text1,text2,text,children}) => {
  return (
    <div className='Textvzorecek'>
        <p className="nazov-text">{nazov}</p>
        <div >
            <p style={{
                color:"var(--farba-sivaText)",
                fontSize:"var(--font-size-base100)",
            }}>{text}</p>


            <p
            style={{
                color:"var(--farba-sivaText)",
                fontSize:"var(--font-size-base100)",
            }}>{text1}</p>

            <p  style={{
                color:"var(--farba-sivaText)",
                fontSize:"var(--font-size-base100)",        
            }}
            >{text2}</p>
        </div>

        {children}


      
    </div>
  )
}

export default Textvzorecek

 