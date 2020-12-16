import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from "react-redux";

import contactsOperations from '../redux/contacts/contactsOperations.js';
import contactsSelectors from '../redux/contacts/contactsSelectors';

import style from "./Contacts.module.css";

const Contacts = function ({contacts, onDelete}) {
  return (<TransitionGroup
    component="ul"
    className={style.list}>
    {contacts.length ? contacts.map(contact =>
      <CSSTransition
        key={contact.id}
        timeout={250}
        classNames={style} >
        <li className={style.item}
          key={contact.id}>{contact.name}: {contact.number}
          <button onClick={() => onDelete(contact.id)} type='button'>Delete</button> </li></CSSTransition>) : []}
  </TransitionGroup>)
}

Contacts.propTypes = {
  contacts:  PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  
  return {
    contacts: contactsSelectors.filterContacts(state)
  }
};
const mapDispatchToProps = {
  onDelete: contactsOperations.removeContacts,
}
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);