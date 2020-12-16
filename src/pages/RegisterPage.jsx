import React, { Component } from 'react';
import { connect } from 'react-redux';

import authOperations from '../redux/auth/authOperations';

import './style.css'


class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChange = ({target: {name, value}})=> {
  this.setState({[name]: value})
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({name: '', email: '', password: ''})

  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Register Page</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group form" >
            <div className="input-group mb-3 size">
              <input
                type="password"
                className="form-control"
                placeholder="Name"
                aria-label="Name"
                name="name"
                value={name}
                onChange={this.handleChange} />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">Name</span>
              </div>  
          </div>
            <div className="input-group mb-3 size">
              <input
                type="password"
                className="form-control"
                placeholder="Email"
                aria-label="email"
                name="email"
                value={email}
                onChange={this.handleChange} />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">Email</span>
              </div>  
          </div>
          
          <div className="input-group mb-3 size">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                name="password"
                value={password}
                onChange={this.handleChange} />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">Password</span>
              </div>  
          </div>

            <button className='btn btn-primary' type='submit'>Login!</button>
            </div>
        </form>
      </div>
    )
  }
}

export default connect(null , {onRegister: authOperations.register})(RegisterPage)