import './vyhodyzaklad.css'

import React from 'react'

const Vyhodyzaklad = ({ ikona, horetext, doletext }) => {
  return (
    <div className='celocekkkk'>
        <div className='ikonaceenk'>{ikona }</div>
        <div className='textovacast'>
            <p style={{fontSize:"var(--font-size-base)", color:"var(--farba-cierna)"}}>{horetext}</p>
            <p style={{fontSize:"var(--font-size-base69)", color:"var(--farba-sivaText)"}}>{doletext}</p>
        </div>
    </div>
  );
};



export default Vyhodyzaklad
