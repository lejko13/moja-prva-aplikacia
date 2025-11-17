import { useState,useRef } from 'react'
import './input.css'; // cesta závisí od umiestnenia súboru

const Input = ({farba,inputRef,value,onChange}) => {

  return (
    

 <input
  className="input"
  placeholder="Začni vyhľadávať"
  ref={inputRef}
  readOnly={!farba}
      type="text"
      value={value}       // prepojenie so stavom
      onChange={onChange}
/>
  )
}

export default Input
