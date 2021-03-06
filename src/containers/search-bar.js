import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <form onSubmit={e => this.onFormSubmit(e)} className="input-group">
        <input
          placeholder="Get a 5 day forecast in your favorite city"
          className="form-control"
          value={this.state.term}
          onChange={e => this.onInputChange(e)} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}


export default connect(null, ({ fetchWeather }))(SearchBar);
