import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const loguotRequest = createAction('auth/loguotRequest');
const loguotSuccess = createAction('auth/loguotSuccess');
const loguotError = createAction('auth/loguotError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  loguotRequest,
  loguotSuccess,
  loguotError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError
}