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
import useToken  from './components/useToken';
import Logout from './pages/Logout';
function App() {
  const {token,setToken} = useToken()
console.log(token)
  return (
    <Router>
    <div className="App">
      <Navbar token={token}/>
      <div className="content">
    <Switch>
        <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/register">
           <Register/>
          </Route>
          <Route exact path="/login">
           <Login setToken={setToken}/>
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
          <Route path="*">
           <NotFound/>
          </Route>
        

    </Switch>
    </div>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
