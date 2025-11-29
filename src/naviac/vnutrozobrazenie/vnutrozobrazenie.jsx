import './vnutrozobrazenie.css'

import React from 'react'
import Star from '../../naviac/star/star'

const Vnutrozobrazenie = ({texthore,ikona,hodnoteie}) => {
  return (
    <div className='Vnutrozobrazenie'>
      <div className='dokpicceekk'>
        <p style={{color:"var(--farba-sivaText)",fontSize:"var(  --font-size-small)"}}>{texthore}</p>
         <div className="hodnotenie-box">
            <span className="hodnotenie-text">{hodnoteie}</span>
            <i class=' ikonoinink bx bxs-star' ></i>
        </div>

      </div>
      <div style={{fontSize:"30px"}}>{ikona} </div>
      
    </div>
  )
}

export default Vnutrozobrazenie
