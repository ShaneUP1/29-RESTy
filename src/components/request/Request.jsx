import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ onSubmit, handleChange }) => (
  <form onSubmit={onSubmit}>
    <input type="url" onChange={handleChange}/>
    <div>
      <input type="radio" value="GET" id="get" name="method"/>
      <label for="get">GET</label>
      <input type="radio" value="POST" id="post" name="method"/>
      <label for="post">POST</label>
      <input type="radio" value="PUT" id="put" name="method"/>
      <label for="put">PUT</label>
      <input type="radio" value="PATCH" id="patch" name="method"/>
      <label for="patch">PATCH</label>
      <input type="radio" value="DELETE" id="delete" name="method"/>
      <label for="delete">DELETE</label>
    </div>
    <input type="submit" value="Let's Go!"/>
  </form>
);

Request.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Request;
