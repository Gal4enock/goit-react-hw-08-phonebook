import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  }
}

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('/users/signup', credentials)
    .then(resp => {
      token.set(resp.data.token)
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
      token.set(resp.data.token);
      dispatch(authActions.loginSuccess(resp.data))
    })
  .catch(err => dispatch(authActions.loginError(err)))
}

const logOut = () => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/users/logout')
    .then(resp => {
      token.unset();
      dispatch(authActions.loginSuccess())
    })
  .catch(err => dispatch(authActions.loginError(err)))
}

export default {
  register,
  logIn,
  logOut,
  token
}