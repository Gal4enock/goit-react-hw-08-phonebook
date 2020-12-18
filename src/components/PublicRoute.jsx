import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

const PublicRoute = ({ component: Component, isAuthentificated, restricted, ...routeProps }) => (<Route
{...routeProps}
  render={props => {
    return isAuthentificated && restricted ? <Redirect to="/contacts" /> : <Component {...props} />
  }
}/>)

const mapStateToProps = state => ({
  isAuthentificated: authSelectors.isAuthentificated(state)
})


export default connect(mapStateToProps)(PublicRoute);