import './hybesa.css'

import  React from 'react'
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import { color } from 'framer-motion'
import { Children } from 'react'

const Hybesa = ({onClick,children}) => {
  return (
    <div className='komponetnne'>
      <div className='texticakasc'
      ></div>
       
      {children}
    </div>
  )
}

export default Hybesa
 