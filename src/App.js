import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Mail from './components/Mail/mail';
import MailList from './components/MailList/mailList';
import SendMail from './components/SendMail/sendMail';
import { useSelector } from 'react-redux'
import { selectSendMessageBoxIsOpen } from './features/mailSlice';

function App() {
  const sendMessageBoxIsOpen = useSelector(selectSendMessageBoxIsOpen)
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar /> 
          <Switch>
            <Route path="/mail" component={Mail}></Route>
            <Route path="/" component={MailList}></Route>
          </Switch>
        </div>
        {sendMessageBoxIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
