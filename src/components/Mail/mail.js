import React from 'react';
import './mail.css';
import { IconButton, Tooltip } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import { useHistory } from 'react-router-dom';

const Mail = () => {

  const history = useHistory();

  return (  
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__tools__left">
          <IconButton onClick={() => history.goBack()}>
            <ArrowBackIcon />
          </IconButton>
          <Tooltip title="Archive">
            <IconButton>
              <MoveToInboxIcon />
            </IconButton>
          </Tooltip>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="mail__tools__right">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div> 

      <div className="mail__body">
        <div className="mail__body__header">
          <div className="mail__body__header__right">
            <h2 className="mail__subject">Subject</h2>
            <LabelImportantIcon className="mail__important"/>
            <p className="mail__title">Title</p>
          </div>
          <div className="mail__body__header__left">
            <p className="mail__time">Wed, Dec 23, 2020, 7:56 AM </p>
            <IconButton>
              <GradeOutlinedIcon />
            </IconButton>
            <IconButton>
              <ReplyOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail__body__message">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde explicabo porro nemo velit necessitatibus dicta maiores expedita, ab quisquam cumque.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde explicabo porro nemo velit necessitatibus dicta maiores expedita, ab quisquam cumque.
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default Mail;