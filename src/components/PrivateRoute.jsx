import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, isAuthentificated, ...routeProps }) => (<Route
{...routeProps}
  render={props => {
    console.log(<Component {...props} />);
    return isAuthentificated ? <Component {...props} /> : <Redirect to="/login" />
  }
}/>)

const mapStateToProps = state => ({
  isAuthentificated: authSelectors.isAuthentificated(state)
})


export default connect(mapStateToProps)(PrivateRoute);