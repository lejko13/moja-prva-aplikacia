import './vnutrozobrazenie.css'

import React from 'react'
import Star from '../../naviac/star/star'

const Vnutrozobrazenie = ({texthore,ikona,hodnoteie}) => {
  return (
    <div className='Vnutrozobrazenie'>
      <div className='dokpicceekk'>
        <p style={{fontSize:"var( --font-size-base69)",color:"var(--farba-sivaText)",fontSize:"var(  --font-size-base)"}}>{texthore}</p>
          {/* <div style={{display:"flex",alignItems:"center"}}> */}
          <span style={{fontSize:"var( --font-size-base4)"}}>{hodnoteie}</span>
            {/* <Star  style={{fontSize:"10px"}}/>   */}
            {/* </div> */}


      </div>
      <div style={{fontSize:"30px"}}>{ikona}</div>
      
    </div>
  )
}

export default Vnutrozobrazenie
