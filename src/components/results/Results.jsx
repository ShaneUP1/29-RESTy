import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => (
  <pre>
    {JSON.stringify(results, null, 2)}
  </pre>
);

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Results;

