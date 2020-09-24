import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Blog from './Components/Blog/Blog';
import Booking from './Components/Booking/Booking';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Room from './Components/Room/Room';
export const userContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  const [locationInfo,setLocationInfo] = useState({});
  return (
    <userContext.Provider value ={{loggedUser:[loggedInUser,setLoggedInUser],location:[locationInfo,setLocationInfo]}}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking/:locationId">
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/destination">
            <Room></Room>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
