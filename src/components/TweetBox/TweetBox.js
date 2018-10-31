import React, { Component } from 'react';
import './TweetBox.css';

class TweetBox extends Component {

  componentWillMount() {
    console.log('123');
  }

  componentDidMount() {
    console.log('345');
  }
  render() {
    return (<h1>TweetBox</h1>);
  }
}

export default TweetBox;
