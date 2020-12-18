import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';

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
    const doubleName = this.props.contacts.find(el => el.name === this.state.name);
    if (doubleName) {
      alert(`${this.state.name} is already in contacts`);
      return
    }
    this.props.toAddContacts(this.state.name, this.state.number);
    this.setState({
      name: '',
      number: ''
    })
   }
  render() {
    console.log(this.props.contacts);
    return ( <form className={style.form} onSubmit={this.handleSubmit}>
      <label className={style.lable}>
        Name
      <input className={style.input} name="name" type="text" value={this.state.name} onChange={this.handleChange} />
      </label>
      <label className={style.lable}>
        Number
      <input className={style.input} name="number" type="phone" value={this.state.number} onChange={this.handleChange} />
        <button className='btn btn-secondary' type="submit">Add contact</button>
      </label>
    </form>)
  }
}

const mapStateToProps = (state) => ({
contacts: state.contacts.items
})

const mapDispatchToProps = dispatch => {
  // const { name, number } = this.state
  return {
    toAddContacts: (name, number) => dispatch(contactsOperations.AddContacts(name, number)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);