import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleHistory.css';

const HistoryLink = ({ url, method }) => (
  <div className={styles.SingleHistory}>
    <p>{url}</p>
    <p>{method}</p>
  </div>
);

HistoryLink.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default HistoryLink;
