import './konverzacie.css'

import { useState, useEffect } from 'react';
import Templatepage from '../tempaltepage/templatepage'

const Konverzacie = () => {
  const hodnota = 10
  const[zaklad,setZaklad] = useState(() => {
    const saved = localStorage.getItem("nova");
    return saved !== null ? Number(saved) : hodnota;
  })

  const funkcia  = () => {
    
 setZaklad(prev => prev+1)
  }

  
  useEffect(() => {
    localStorage.setItem("nova" , zaklad)

  },[zaklad])
  

  return (
    <Templatepage>
        <div className='Konverzacie'>
          <div className='uvidime'>
       <button
       onClick={() => console.log({zaklad})
       }
  style={{
    backgroundColor: 'blue',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }}
>
  zisti
</button>
       <button
      onClick={funkcia}
      
  style={{
    backgroundColor: 'red',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }}
>
  Klikni ma
</button>
 <button
       onClick={() => setZaklad(hodnota)
       }
  style={{
    backgroundColor: 'blue',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }}
>
  refresh
</button>

<div>{zaklad}</div>


          </div>
          <div className='uvidim2'>

          </div>
          
         
        </div>
        </Templatepage>
      
    
  )
}

export default Konverzacie
