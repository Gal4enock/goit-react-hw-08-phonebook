import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
// import constants from '../constants.js';

const addContactsRequest = createAction('contacts/addRequest');
const addContactsSuccess = createAction('contacts/addSuccess');
const addContactsError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const removeContactsRequest = createAction('contacts/removeRequest');
const removeContactsSuccess = createAction('contacts/removeSuccess');
const removeContactsError = createAction('contacts/removeError');


const handleFilter = createAction('contact/filter', filter=> ({payload: {filter}}) )


export default {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  handleFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError
}