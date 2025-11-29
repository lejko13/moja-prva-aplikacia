import { Children } from 'react';
import './vyhodyzaklad.css'

import React from 'react'

const Vyhodyzaklad = ({ ikona, horetext, doletext,children }) => {
  return (
    <>
    <div className='celocekkkk'>
        <div className='ikonaceenk'>{ikona }</div>
        <div className='textovacast'>
            <p style={{fontSize:"var(--font-size-base)", color:"var(--farba-cierna)"}}>{horetext}</p>
            <p style={{fontSize:"var(  --font-size-small)",color:"var(--farba-sivaText)"}}>{doletext}</p>
        </div>
    </div>
    {children}
    </>
  );
};



export default Vyhodyzaklad
