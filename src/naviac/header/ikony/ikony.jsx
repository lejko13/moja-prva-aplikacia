import './ikony.css';
import React, { forwardRef } from 'react';

// forwardRef prijíma props a ref ako druhý argument
const Ikony = forwardRef(({ ikona, style, onMouseEnter, onMouseLeave, slova, children, onClick }, ref) => {
  return (
    <div
      className='Ikony'
      ref={ref}  // tu sa priradí ref z rodiča
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>{ikona}</div>
      <div style={{ whiteSpace: 'nowrap', fontSize: "var(--font-size-base2)" }}>{slova}</div>
      {children}
    </div>
  );
});

export default Ikony;
