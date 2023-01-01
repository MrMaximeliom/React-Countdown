import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import CreateCountdown from './pages/CreateCountdown';
import Logout from './pages/Logout';
import Countdowns from "./pages/Countdowns";
import React from 'react'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import UserCountdowns from './pages/UserCountdowns';
import { useSelector } from 'react-redux'


function App() {
  const {userInfo } = useSelector((state) => state.user) 


  return (
    <Router>
    
    <div className="App">
      <Navbar />
      <div className="content">
    <Switch>
        <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/register">
           <Register  />
          </Route>
          <Route exact path="/login">
           <Login />
          </Route>
          <Route exact path="/logout">
            <Logout />
            </Route>   
          <Route exact path="/contactUs">
           <ContactUs/>
          </Route>
          <Route exact path="/createCountdown">
           <CreateCountdown/>
          </Route>
          <Route exact path="/myCountdowns">
            <UserCountdowns/>
          </Route>
         
          <Route path="*">
           <NotFound/>
          </Route>
        

    </Switch>
    </div>
    <div data-attr="fff">
      <NotificationContainer/>
      </div>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
