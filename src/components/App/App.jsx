import React, { lazy, Suspense, Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import authOperations from '../../redux/auth/authOperations';

import Navigation from '../Navigation'

// import Contacts from '../Contacts/Contacts';
// import ContactForm from '../ContactForm/ContactForm';
// import Filter from '../FilterContacts/FilterContacts';
// import contactsOperations from '../../redux/contacts/contactsOperations';
// import contactsSelectors from '../../redux/contacts/contactsSelectors';

import Style from './App.module.css'


// class App extends Component {

//   componentDidMount() {
//     this.props.toFetchContacts()
//   }
  
//   render() {
//     return (
//       <div className={Style.Container}>
        
//         <h1 className={Style.fontColor}>Phonebook</h1>
//         <ContactForm />
//         <h2>Find contacts by name</h2>
//         <Filter />
//         <Contacts />
//       </div>
//     )}
  
// }

// const mapStateToProps = state => ({
//   isLoadingContacts: contactsSelectors.getLoading(state)
// })

// const mapDispatchToProps = {
//   toFetchContacts: contactsOperations.fetchContacts
// }

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
            <Route path="/" exact component={lazy(() => import('../../pages/HomePage'/* webpackChunkName: "home-page" */))} />
            <Route path="/register" exact component={lazy(() => import('../../pages/RegisterPage'/* webpackChunkName: "register-page" */))} />
            <Route path="/login" component={lazy(() => import('../../pages/LoginPage'/* webpackChunkName: "login-page" */))} />
            <Route path="/contacts" component={lazy(() => import('../../pages/ContactsPage'/* webpackChunkName: "contacts-page" */))}/>
          </Switch>
        </Suspense>
      </div>
    )
  }
}
  
export default connect(null, {onGetUser: authOperations.getCurrentUser})(App);
