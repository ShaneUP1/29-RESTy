import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ response }) => (
  <pre>
    {JSON.stringify(response, null, 2)}
  </pre>
);

Results.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Results;

