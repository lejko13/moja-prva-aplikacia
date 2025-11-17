import './textvzorecek.css'

import React from 'react'

const Textvzorecek = ({nazov,text,text2}) => {
  return (
    <div className='Textvzorecek'>
        <p style={{
            fontSize:"var(--font-size-base5)",
            fontWeight:550
        }}>{nazov}</p>
        <div >
            <p
            style={{
                fontSize:"var(--font-size-base100)",
            }}
            >{text}</p>
            <p  style={{
                fontSize:"var(--font-size-base100)",
            }}
            >{text2}</p>
        </div>


      
    </div>
  )
}

export default Textvzorecek

 