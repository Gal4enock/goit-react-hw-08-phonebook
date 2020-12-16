import React, { Component } from 'react';
import './style.css'



class LoginPage extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = ({target: {name, value}})=> {
  this.setState({[name]: value})
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });

  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login Page</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group form" >
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

export default LoginPage