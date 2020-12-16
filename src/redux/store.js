
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import authReducer from './auth/authReducer';

const defaultMiddleware = getDefaultMiddleware(); 

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer
  }, 
  middleware: [...defaultMiddleware]
})

export default store;