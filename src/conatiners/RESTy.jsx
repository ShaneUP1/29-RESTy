import React, { Component } from 'react';
import HistoryList from '../components/history/HistoryList';
import Request from '../components/request/Request';
import Results from '../components/results/Results';
import { fetchEndpoints } from '../services/apiCalls';

export default class RESTy extends Component {
  state = {
    method: '',
    url: '',
    body: '',
    response: [],
    histories: []
  }
  
  handleSubmit = (event) => {
    const { url, method, body } = this.state;
    event.preventDefault();
    fetchEndpoints(url, method, body)
      .then(res => this.setState({ response: res }));
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <>
        <Request onSubmit={this.handleSubmit} onChange={this.handleChange} url={this.url}/>
        <Results response={this.state.response}/>
        <HistoryList histories={this.state.histories}/>
      </>
    );
  }
}
