import React from 'react';
// import {CSSTransition} from 'react-transition-group';

import style from './Notification.module.css';



const Notification = ({ name }) => (
  // <CSSTransition in={true} appear timeout={250} classNames={style} unmountOnExit>
  <div className={style.NotificationWrapper}>
    {`${name} is already in contacts`}
  </div>
  // </CSSTransition>
);


export default Notification;
