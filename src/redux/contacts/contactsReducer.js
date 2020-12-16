import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions.js';

const toAddContact = (state, action) => {
  const doubleName = state.find(el => el.name === action.payload.name);
    if (doubleName) {
      alert(`${action.payload.name} is already in contacts`);
      return
    }
  return [...state, action.payload];
}
const toDelContact = (state, action) => state.filter(contact => contact.id !== action.payload);


const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactsSuccess]: toAddContact,
  [contactsActions.removeContactsSuccess]: toDelContact,
})


const filter = createReducer('', {
  [contactsActions.handleFilter]: (state, action) => action.payload.filter
})

export default combineReducers ({items, filter})


