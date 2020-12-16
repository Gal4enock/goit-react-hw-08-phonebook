import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Navigation.module.css'


//import { Test } from './Navigation.styles';

const Navigation = ({
  avatar = "https://streamdps.ru/upload/iblock/ba4/ba43a8bf5b491168b4f74e9922c88c25.jpg",
  name,
  onLogout
}) => (
  <div className="NavigationWrapper wrap">
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
    <div >
      <img src={avatar} width='32' alt="" />
      <span>Welcome, </span>
      <button className='btn btn-primary log' type='button' onClick={onLogout}>Logout</button>
  </div>
  </div>
);



export default Navigation;
