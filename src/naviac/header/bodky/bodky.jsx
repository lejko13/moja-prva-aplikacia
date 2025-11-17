import React, { useState } from 'react';
import './bodky.css';

const Bodky = ({ style ,setOtvorenie,onClick}) => {
  const [hover, setHover] = useState(false);
  

  return (
    
    <div

      className="Bodky"
      style={{
        backgroundColor: hover ? 'blue' : style?.backgroundColor, // hover
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    onClick={onClick}

 
    >

    </div>
  );
};

export default Bodky;
