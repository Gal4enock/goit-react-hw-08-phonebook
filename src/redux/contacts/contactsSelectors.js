import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter

const filterContacts = createSelector([getFilter, getContacts], (filter, contacts) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
})

// const filterContacts = state => {
//   const filter = getFilter(state).toLowerCase()
//   const contacts = getContacts(state);
//   return (contacts.filter(contact => contact.name.toLowerCase().includes(filter)))

// }

export default {
  getLoading, 
  getFilter,
  filterContacts
}