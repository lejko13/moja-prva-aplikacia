import './impluz.css'

import React, { Children } from 'react'

const Impulz = ({children}) => {
  return (
    <div className="flex-shrink-0">
        <div className='retard' style={{
            backgroundColor:"rgb(74 222 128)"
        }}>{children}</div>
                  
        </div>
  )
}

export default Impulz
