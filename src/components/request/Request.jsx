import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

const Request = ({ onSubmit, handleChange }) => (
  <>
    <form onSubmit={onSubmit} className={styles.Request}>
      <input type="url" placeholder="https://" onChange={handleChange}/>
      <div>
        <input type="radio" value="GET" id="get" name="method" onChange={handleChange}/>
        <label htmlFor="get">GET</label>
        <input type="radio" value="POST" id="post" name="method" onChange={handleChange}/>
        <label htmlFor="post">POST</label>
        <input type="radio" value="PUT" id="put" name="method" onChange={handleChange} />
        <label htmlFor="put">PUT</label>
        <input type="radio" value="PATCH" id="patch" name="method" onChange={handleChange}/>
        <label htmlFor="patch">PATCH</label>
        <input type="radio" value="DELETE" id="delete" name="method" onChange={handleChange}/>
        <label htmlFor="delete">DELETE</label>
      </div>
      <button>Lets Go!</button>
      <textarea cols="40" rows="10"/>
    </form>
  </>
);

Request.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Request;
