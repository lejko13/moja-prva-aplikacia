import './otomto.css'

import React, { Children } from 'react'

const Otomto = ({popisek,pravidla,upratovanie,poloha,priestor}) => {
  return (
    <div className='Otomto'>
        <p className='texticekzvyraznemny'>O tomto priestore</p>
        <div className='popisecekk'>{popisek}</div>
       <p className='texticekzvyraznemny'>Priestor</p>
     <div className='popisecekk'>{priestor}</div>
       <p className='texticekzvyraznemny'>Poloha</p>
            <div className='popisecekk'>{poloha}</div>


      <p className='texticekzvyraznemny'>Upratovanie</p>
           <div className='popisecekk'>{upratovanie}</div>


      <p className='texticekzvyraznemny'>Pravidla</p>
           <div className='popisecekk'>{pravidla}</div>
     
      
    </div>
  )
}

export default Otomto
