import React from 'react';
import PropTypes from 'prop-types';
import SingleHistory from './SingleHistory';
// import styles from './HistoryList.css';

const HistoryList = ({ histories }) => {
  const historyList = histories.map((history, i) => (
    <li key={i}>
      <SingleHistory {...history}/>
    </li>
  ));

  return (
    <ul>
      {historyList}
    </ul>
  );
};

HistoryList.propTypes = {
  histories: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HistoryList;

