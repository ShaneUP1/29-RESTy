import React, { Component } from 'react';
import Request from '../components/request/Request';
import Results from '../components/results/Results';
import HistoryList from '../components/history/HistoryList';

export default class RESTy extends Component {
  state = {

  }
  
  handleSubmit = () => {};

  handleChange = ({ target }) => {
    console.log(target.value);
    this.setState({ [target.name]: target.value });
  };

  
  
  render() {
    return (
      <>
        <Request onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        
      </>
    )
  }
}
