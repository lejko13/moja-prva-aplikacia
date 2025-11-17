import './nastavenia.css'

import React from 'react'
import Templatepage from '../tempaltepage/templatepage'
const Nastavenia = () => {
  return (
    <Templatepage>
 
        <p>Nastavenia</p>
        <div onClick={() => console.log("Rodič")}>
  <button onClick={() => console.log("Tlačidlo")}>Klikni ma</button>
</div>
     
    </Templatepage>
  )
}

export default Nastavenia
