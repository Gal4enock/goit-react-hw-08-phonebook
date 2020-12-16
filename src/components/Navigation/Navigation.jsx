import React from 'react';
import {  connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations'

import style from './Navigation.module.css'


//import { Test } from './Navigation.styles';

const Navigation = ({
  avatar,
  name,
  onLogout,
  isAuthentificated
}) => (
  <div className="wrap NavigationWrapper">
    <ul className={style.List}>
      <li><NavLink exact to="/" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
      Home</NavLink></li>
      <li><NavLink exact to="/register" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
        Register</NavLink></li>
      <li><NavLink exact to="/login" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
      Login</NavLink></li>
    </ul>
    {isAuthentificated && 
    <div className={style.avatar}>
      <img src={avatar} width='32' alt="" />
      <span>Welcome, {name} </span>
      <button className='btn btn-primary log' type='button' onClick={onLogout}>Logout</button>
  </div>}
  </div>
);

const mapStateToProps = state => ({
  isAuthentificated: authSelectors.isAuthentificated(state),
  name: authSelectors.getUserName(state),
  avatar: "https://streamdps.ru/upload/iblock/ba4/ba43a8bf5b491168b4f74e9922c88c25.jpg"
})

const mapDispathToProps = {
  onLogout: authOperations.logOut
}

export default connect(mapStateToProps, mapDispathToProps)(Navigation);
