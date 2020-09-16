import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header.js';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Home from './Components/Home';
import { auth } from './firebase/firebaseconfig';
import { useStateValue } from './Context/StateProvider';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Components/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Components/Orders';
import Footer from './Components/Footer';

const promise = loadStripe('pk_test_51HRaMVK4JQm0q2uLkJZht2XoaMOov9wnuhkKX3LdDLbcdFVqbE4VLgENeqtnWVY9RbtA7GtUp4nWTC3mJGpeascD00b9WlaD2t');

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // user is logged in
      dispatch({
        type: "SET_USER",
        user: authUser ? authUser : null
      })
    })

    return () => {
      // any cleanup
      unsubscribe()
    }
  }, []);
  
  return (
    <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/orders">
              <Header />
              <Orders/>
            </Route>
            <Route path = '/payment'>
              <Header/>
              <Elements stripe = {promise}>
                <Payment/>
              </Elements>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
    </Router>
  
  );
}

export default App;
