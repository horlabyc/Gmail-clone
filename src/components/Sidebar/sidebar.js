import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarItem from '../SidebarItem/sidebarItem';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessageBox } from '../../features/mailSlice';

const Sidebar = () => {

  const dispatch = useDispatch();
  return (  
    <div className="sidebar">
      <Button 
        startIcon={<AddIcon fontSize="large"/>}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessageBox())}
      >
        Compose
      </Button>
      <SidebarItem Icon={InboxIcon} title="Inbox" count={54}/>
      <SidebarItem Icon={StarIcon} title="Starred" count={25} selected={true}/>
      <SidebarItem Icon={AccessTimeIcon} title="Snoozed" count={25}/>
      <SidebarItem Icon={LabelImportantIcon} title="Important" count={25}/>
      <SidebarItem Icon={NearMeIcon} title="Sent" count={25} selected={true}/>
      <SidebarItem Icon={NoteIcon} title="Drafts" count={15}/>
      <SidebarItem Icon={ExpandMoreIcon} title="More" count={15}/>

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
 
export default Sidebar;