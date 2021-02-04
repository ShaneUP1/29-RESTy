import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => (
  <textarea cols="50" rows="25" placeholder="Results" value={results}/>
);

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Results;

