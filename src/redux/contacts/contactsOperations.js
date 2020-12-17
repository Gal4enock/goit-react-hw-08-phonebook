import axios from 'axios';
import contactsActions from './contactsActions';

const AddContacts = (name, number) => dispatch => {
  dispatch(contactsActions.addContactsRequest())
  axios.post('/contacts', { name, number })
  .then(resp => dispatch(contactsActions.addContactsSuccess(resp.data)))
  .catch(error => dispatch(contactsActions.addContactsError(error)))
}

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  axios.get('/contacts')
    .then(resp => dispatch(contactsActions.fetchContactsSuccess(resp.data)))
  .catch(err => dispatch(contactsActions.fetchContactsError(err)))
}

const removeContacts = id => dispatch => {
  dispatch(contactsActions.removeContactsRequest)
  axios.delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactsSuccess(id)))
  .catch(err => dispatch(contactsActions.removeContactsError(err)))
}
export default {
  AddContacts,
  fetchContacts,
  removeContacts
}