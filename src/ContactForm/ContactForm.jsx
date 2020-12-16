import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../redux/contacts/contactsOperations';

import style from './ContactForm.module.css'



class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toAddContacts(this.state.name, this.state.number);
    this.setState({
      name: '',
      number: ''
    })
   }
  render() {
    return ( <form className={style.form} onSubmit={this.handleSubmit}>
      <label className={style.lable}>
        Name
      <input className={style.input} name="name" type="text" value={this.state.name} onChange={this.handleChange} />
      </label>
      <label className={style.lable}>
        Number
      <input className={style.input} name="number" type="phone" value={this.state.number} onChange={this.handleChange} />
        <button type="submit">Add contact</button>
      </label>
    </form>)
  }
}

const mapDispatchToProps = dispatch => {
  // const { name, number } = this.state
  return {
    toAddContacts: (name, number) => dispatch(contactsOperations.AddContacts(name, number)),
  }
}
export default connect(null, mapDispatchToProps)(ContactForm);