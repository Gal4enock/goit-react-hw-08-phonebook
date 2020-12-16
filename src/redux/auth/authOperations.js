import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('/users/signup', credentials)
    .then(resp => {
      console.log(resp);
      dispatch(authActions.registerSuccess(resp.data))
    })
  .catch(err => dispatch(authActions.registerError(err)))
}

const logIn = credentials => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/users/login', credentials)
    .then(resp => {
      dispatch(authActions.loginSuccess(resp.data))
    })
  .catch(err => dispatch(authActions.loginError(err)))
}

export default {
  register,
  logIn
}