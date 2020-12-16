import React, { Component, } from 'react';
// import {} from 'bootstrap'

import Contacts from '../components/Contacts/Contacts'
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/FilterContacts/FilterContacts';
import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';

import Style from "../components/App/App.module.css"
import { connect } from 'react-redux';

class HomePage extends Component {
 
componentDidMount() {
    this.props.toFetchContacts()
  }
  
  render() {
    return (
      <div className={Style.Container}>
        
        <h1 className={Style.fontColor}>Phonebook</h1>
        <ContactForm />
        <h2>Find contacts by name</h2>
        <Filter />
        <Contacts />
      </div>
    )}
  
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state)
})

const mapDispatchToProps = {
  toFetchContacts: contactsOperations.fetchContacts
}

export default connect (mapStateToProps, mapDispatchToProps)(HomePage)