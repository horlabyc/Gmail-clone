import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Mail from './components/Mail/mail';
import MailList from './components/MailList/mailList';
import SendMail from './components/SendMail/sendMail';
import { useSelector } from 'react-redux'
import { selectSendMessageBoxIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login/login';
import { auth } from './app/firebase';
import { useDispatch } from 'react-redux'

function App() {
  const sendMessageBoxIsOpen = useSelector(selectSendMessageBoxIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [dispatch]);
  return (
    <Router>
      {
        !user ? 
        <Login /> :
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
      }
    </Router>
  );
}

export default App;
