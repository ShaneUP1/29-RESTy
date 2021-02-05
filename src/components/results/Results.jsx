import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ response }) => (
  <pre data-testid="results">
    {JSON.stringify(response, null, 2)}
  </pre>
);

Results.propTypes = {
  response: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default Results;

