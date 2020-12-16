import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import contactsActions from '../../redux/contacts/contactsActions.js';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

import  '../../pages/style.css'

const Filter = ({ value, toFilter }) =>  (
    <div className='box'>
    <input
      type="text"
      name="filter"
      value={value}
      onChange={e => toFilter(e.target.value)}
    className='input'/>
    </div>
  )

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  toFilter: PropTypes.func,
}

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state)

})

const mapDispatchToProps = {
  toFilter: contactsActions.handleFilter,
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)