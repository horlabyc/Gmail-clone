import { Button } from '@material-ui/core';
import React from 'react';
import './sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarItem from '../SidebarItem/sidebarItem';
import InboxIcon from '@material-ui/icons/Inbox';

const Sidebar = () => {
  return (  
    <div className="sidebar">
      <Button 
        startIcon={<AddIcon fontSize="large"/>}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarItem Icon={InboxIcon} title="Inbox" count={54}/>
    </div>
  );
}
 
export default Sidebar;