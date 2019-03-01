import React, { Component } from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import ForgotPassword from './pages/ForgetPassword'
import Error from './pages/Error'
import Footer from './components/Footer';
import PaymentMethod from './pages/PaymentMethod';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
              <Navigation />
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/member/account" component={Account}/>
                <Route path="/member/payment_method" component={PaymentMethod}/>
                <Route path="/reset-password" component={ForgotPassword}/>
                <Route component={Error}/>
              </Switch>
              <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
