import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom'
import './emailRow.css';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';

const EmailRow = ({id, title, subject, description, time}) => {
  const history = useHistory();
  return (  
    <div className="emailRow" onClick={() => history.push('/mail')}>
        <div className="emailRow__options">
          <Checkbox />
          <IconButton>
            <StarOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
        </div>
        <h3 className="emailRow__title">  
          {title}
        </h3>
        <div className="emailRow__message">
          <h4>
            {subject}
            <span className="emailRow__description"> - {description}</span>
          </h4>
        </div>
        <parent className="emailRow__time">{time}</parent>
    </div>
  );
}
 
export default EmailRow;