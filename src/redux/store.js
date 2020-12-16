
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import contactsReducer from './contacts/contactsReducer';
import authReducer from './auth/authReducer';

const defaultMiddleware = getDefaultMiddleware(); 

const authPersister = {
  key: 'auth',
  storage,
  whitelist:'token'
}

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersister, authReducer)
  }, 
  middleware: [...defaultMiddleware]
})

export const persistor = persistStore(store);