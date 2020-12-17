import React, { Component, } from 'react';


import Style from "../components/App/App.module.css"
import { connect } from 'react-redux';

class HomePage extends Component {
  
  render() {
    return (
      <div className={Style.Container}>
        
        <h1>Nice to see you!</h1>
       
      </div>
    )}
  
}



export default HomePage;