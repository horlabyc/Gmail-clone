import React from 'react';
import './sendMail.css';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Button } from '@material-ui/core';

const SendMail = () => {
  return (  
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseOutlinedIcon className="sendMail__close"/>
      </div>
      <form>

        <input type="text" placeholder="Recipients"/>
        <input type="text" placeholder="Subject"/>
        <input type="text" className="sendMail__message"/>

        <div className="sendMail__options">
          <Button className="sendMail__send" variant="contained" color="primary" type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}
 
export default SendMail;