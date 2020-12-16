import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Navigation.module.css'


//import { Test } from './Navigation.styles';

const Navigation = () => (
  <div className="NavigationWrapper">
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
  </div>
);



export default Navigation;
