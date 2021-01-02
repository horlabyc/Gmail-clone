import React from 'react';
import './sendMail.css';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import HeightIcon from '@material-ui/icons/Height';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { closeSendMessageBox,openSendMessageBox, minimizeSendMessageBox, selectSendMessageBoxIsMinimized } from '../../features/mailSlice';
import { db } from '../../app/firebase';
import firebase from 'firebase';

const SendMail = () => {

  const { errors, handleSubmit, watch, register } = useForm();
  const dispatch = useDispatch();
  const sendMessageBoxIsMinimized = useSelector(selectSendMessageBoxIsMinimized)
  const onSubmit = (data) => {
    db.collection('emails').add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    dispatch(closeSendMessageBox());
  }
  return (  
    <div className={`sendMail ${sendMessageBoxIsMinimized ? 'sendMail__minimized' : ''}`}>
      <div className="sendMail__header">
        <h3>New Message</h3>
        <div className="sendMail__header__right">
          <RemoveOutlinedIcon className="sendMail__minimize" onClick={() => dispatch(minimizeSendMessageBox())}/>
          <HeightIcon className="sendMail__maximize" onClick={() => dispatch(openSendMessageBox())}/>
          <CloseOutlinedIcon className="sendMail__close" onClick={() => dispatch(closeSendMessageBox())}/>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          name="to" 
          type="email" 
          placeholder="Recipients" 
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail__error">Recipient is required</p>}
        <input 
          name="subject" 
          type="text" 
          placeholder="Subject" 
          ref={register({ required: true })}
        />
        {errors.subject && <p className="sendMail__error">Subject is required</p>}
        <input 
          name="message" 
          type="text" 
          className="sendMail__message" 
          ref={register({ required: true })}
        />
        {errors.message && <p className="sendMail__error">Message is required</p>}
        <div className="sendMail__options">
          <Button className="sendMail__send" variant="contained" color="primary" type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}
 
export default SendMail;