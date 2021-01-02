import React, { useEffect, useState } from 'react';
import './mailList.css';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'; 
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from '@material-ui/icons/Inbox';
import EmailSection from '../EmailSection/emailSection';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from '../EmailRow/emailRow';
import { db } from '../../app/firebase';

const MailList = () => {

  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection('emails').orderBy('timeStamp', 'desc').onSnapshot((snapshot) => {
      setMails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
      setLoading(false);
    })
  }, []);
  return (  
    <div className="mailList">
      <div className="emailList__settings">
        <div className="emailList__setings__left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__setings__right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <EmailSection Icon={InboxIcon} title="Primary" color="red" selected/>
        <EmailSection Icon={PeopleIcon} title="Social" color="#1A73EB"/>
        <EmailSection Icon={LocalOfferIcon} title="Promotions" color="green"/>
      </div>

      <div className="emailList__list">
        {
          mails.map(({id, data: {to, message, subject, timeStamp}}) => (
            <EmailRow 
              title={to}
              subject={subject}
              description={message}
              time={new Date(timeStamp && timeStamp.seconds * 1000).toLocaleDateString()}
              id={id}
              key={id}
            />
          ))
        }
        <EmailRow 
          title="Twitch"
          subject="Fellow hoodlums"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="10pm"
        />
        <EmailRow 
          title="Fidelity Bank"
          subject="Happy New Year"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="12:00am"
        />
        <EmailRow 
          title="Digital Ocean"
          subject="Your December 2020 invoice is available"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="1:15pm"
        />
        <EmailRow 
          title="Twitch"
          subject="Fellow hoodlums"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="10pm"
        />
        <EmailRow 
          title="Fidelity Bank"
          subject="Happy New Year"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="12:00am"
        />
        <EmailRow 
          title="Digital Ocean"
          subject="Your December 2020 invoice is available"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="1:15pm"
        />
        <EmailRow 
          title="Twitch"
          subject="Fellow hoodlums"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="10pm"
        />
        <EmailRow 
          title="Fidelity Bank"
          subject="Happy New Year"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="12:00am"
        />
        <EmailRow 
          title="Digital Ocean"
          subject="Your December 2020 invoice is available"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="1:15pm"
        />
        <EmailRow 
          title="Twitch"
          subject="Fellow hoodlums"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="10pm"
        />
        <EmailRow 
          title="Fidelity Bank"
          subject="Happy New Year"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="12:00am"
        />
        <EmailRow 
          title="Digital Ocean"
          subject="Your December 2020 invoice is available"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="1:15pm"
        />
        <EmailRow 
          title="Twitch"
          subject="Fellow hoodlums"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="10pm"
        />
        <EmailRow 
          title="Fidelity Bank"
          subject="Happy New Year"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="12:00am"
        />
        <EmailRow 
          title="Digital Ocean"
          subject="Your December 2020 invoice is available"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eius adipisci quasi iure quo a ut sint culpa nostrum perferendis!"
          time="1:15pm"
        />
      </div>
    </div>
  );
}
 
export default MailList;