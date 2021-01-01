import React from 'react';
import './sidebarItem.css';

const SidebarItem = ({ Icon, title, count}) => {
  return (  
    <div className="sidebarItem">
      <Icon />
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
}
 
export default SidebarItem;