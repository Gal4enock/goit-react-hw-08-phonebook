import React, { Component, } from 'react';
import { connect } from 'react-redux';

import Contacts from '../components/Contacts/Contacts'
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/FilterContacts/FilterContacts';
import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';
import authSelectors from '../redux/auth/authSelectors';

import Style from "../components/App/App.module.css"

class ContactsPage extends Component {
 
// componentDidMount() {
//     this.props.toFetchContacts()
//   }

  
  render() {
    return (
        <div className={Style.Container}>
        
          <h1 className={Style.fontColor}>Phonebook</h1>
          <ContactForm />
          <h2 className={Style.title}>Find contacts by name</h2>
          <Filter />
          <Contacts />
        </div>
    )
  }
  
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  isAuthentificated: authSelectors.isAuthentificated(state),
})

// const mapDispatchToProps = {
//   toFetchContacts: contactsOperations.fetchContacts
// }

export default connect (mapStateToProps)(ContactsPage)