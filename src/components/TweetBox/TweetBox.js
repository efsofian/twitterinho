import React, { Component } from 'react';
import './TweetBox.css';
import PropTypes from 'prop-types';

class TweetBox extends Component {

  componentWillMount() {
    console.log('123');
  }

  componentDidMount() {
    console.log('345');
  }

  static propTypes = {
    publish: PropTypes.func.isRequired,
  }
  handleChange = ({ target:  { value }}) => {
    this.setState({ value: value });
  };

  handleSubmit = () => {
    const { value } = this.state;
    const { publish } = this.props
    if (value.length && value.length <= 140) {
      publish(value);

      this.setState({ value : ''});
    }
  };

  handleFocus = ({ type }) => {
    this._textarea.placeholder = type === 'focus' ? '' : 'Composez votre Tweet';  
  };

  state = {
    value: '',
  };

  render() {
    const { value } = this.state;
    return (
      <div className="tweetbox">
        <textarea
          row={3}
          placeholder="Composez votre Tweet"
          value={value}
          className={value.length > 140 && 'alert'}
          onChange={this.handleChange}
          ref={t => this._textarea = t}
          onFocus={this.handleFocus}
          onBlur={this.handleFocus}
          />
        <div className="action">
          <span className="count">{140 - value.length + ' caractere restant'}</span>
          <button
          type="button"
          disabled={!value.length || value.length > 140}
          onClick={this.handleSubmit}

          >Tweet</button>
        </div>
      </div>
    );
  }
}

export default TweetBox;
