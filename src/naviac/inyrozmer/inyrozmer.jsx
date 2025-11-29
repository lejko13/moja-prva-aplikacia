import './inyrozdiel.css'

import React from 'react'
import Nahlad from '../nahlad/nahlad'

const Inyrozmer = ({data,text,textmaly}) => {
  return (


<div className='vrhocelcekk'>
    <div className='pohybecek'>
        <div>
            <span className='TEXTICEKNEAOVICEK' style={{ fontWeight:"550",}}>{text}</span>
            <p className='textpodhlavnuym'>{textmaly}</p>
        </div>
    </div>
    <div className='Inyrozmer'>
        
        {data.map((prev,index) => (
<Nahlad
                style={{
                 
                    padding:"0px",
                    width: "100%",
                    height:"100%",
                }}
                   kontrola = {false}
                  //  prepinam = {}
                   
                fotky = {prev.fotky}
                apartman={prev}
                nazov = {prev.name}
                location = {prev.location}
                hodnotenie = {prev.hodnotenie}

            ></Nahlad> 
        ))}
           
      
    </div>
</div>
  )
}

export default Inyrozmer

            
        
                