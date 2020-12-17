import React, { Component, } from 'react';

import Contacts from '../components/Contacts/Contacts'
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/FilterContacts/FilterContacts';
import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';

import Style from "../components/App/App.module.css"
import { connect } from 'react-redux';

class HomePage extends Component {
 

  
  render() {
    return (
      <div className={Style.Container}>
        
        <h1>Nice to see you!</h1>
       
      </div>
    )}
  
}



export default HomePage;