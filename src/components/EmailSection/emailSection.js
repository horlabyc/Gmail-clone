import React from 'react';
import './emailSection.css';

const EmailSection = ({Icon, title, color, selected}) => {
  return (  
    <div 
      className={`emailSection ${selected ? 'emailSection__selected' : ''}`} 
      style={{ borderBottom: `3px solid ${color}`, color: `${selected && color}`}}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}
 
export default EmailSection;