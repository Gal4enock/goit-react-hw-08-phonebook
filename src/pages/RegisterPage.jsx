import React, { Component } from 'react';



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

  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Login Page</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name
             <input type="name" name="name" value={name} onChange={this.handleChange}/>
          </label>
          <label>
            Email
             <input type="email" name="email" value={email} onChange={this.handleChange}/>
          </label>
          <label>
            Password
             <input type="password" name="password" value={password} onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    )
  }
}