import React, { lazy, Suspense, Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import authOperations from '../../redux/auth/authOperations';

import Navigation from '../Navigation'
import PrivateRoute from '../PrivateRoute';
import HomePage from '../../pages/HomePage';
import ContactsPage from '../../pages/ContactsPage';


import Style from './App.module.css'


class App extends Component {

  componentDidMount() {
   this.props.onGetUser()
  }
  
  render() {
    return (
      <div className={Style.Container}>
        <Navigation />
        <hr />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={lazy(() => import('../../pages/LoginPage'/* webpackChunkName: "login-page" */))} />
             <Route path="/register" exact component={lazy(() => import('../../pages/RegisterPage'/* webpackChunkName: "register-page" */))} />
            <PrivateRoute path='/contacts' exact component={ContactsPage}/>
          </Switch>
        </Suspense>
      </div>
    )
  }
}
  
export default connect(null, {onGetUser: authOperations.getCurrentUser})(App);
