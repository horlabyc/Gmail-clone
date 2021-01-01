import React from 'react';
import './sidebarItem.css';

const SidebarItem = ({ Icon, title, count, selected}) => {
  return (  
    <div className={`sidebarItem ${selected ? 'sidebarItem__active' : ''}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
}
 
export default SidebarItem;