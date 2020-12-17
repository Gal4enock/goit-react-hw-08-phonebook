import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...routeProps }) => <Route
{...routeProps}
  render={props => {
  return isAuthentificated ? <Component {...props}/> : <Redirect to="/login"/>
}}/>

export default PrivateRoute;