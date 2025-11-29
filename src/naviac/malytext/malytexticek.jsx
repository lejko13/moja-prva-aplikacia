import React from 'react';
import './malytexticek.css';

const Malytexticek = ({ ikona, text, text2, className = '',ikonastyle,textstyle,textstyel2 }) => {
  return (
    <div className={`malytexticek ${className}`}>
      <span className="malytexticek-ikona"style={ikonastyle}>{ikona}</span>
      <span className="malytexticek-text" style={textstyle}>{text}</span>
      <span className="malytexticek-text" style={textstyel2}>{text2}</span>
    </div>
  );
};

export default Malytexticek;