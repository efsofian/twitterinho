import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tweet.css';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

class Tweet extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
  }
  static defaultProps = {
    date: moment().format('DD/MM/YY'),
  }
  state = {
    isFocus: false,
  };
  handleFocus = ({ type }) => {
    this.setState({ isFocus: type === 'mouseenter'})
  };

  render() {
    const { fullname, avatar, content, username, date, index, remove } = this.props;
    const { isFocus } = this.state;
    return (
      <div className="tweet">
        <div className="avatar">
        <img src={avatar} alt="presentation" />
        </div>
        <div className="data">
          <div className="infos">
            <strong>{username}</strong>
          </div>
          <div className="content">
          <p>{content}</p>
          {username === 'Pikachu' && (
            <FontAwesome
            className="grey trash"name={isFocus ? 'trash' : 'trash-o'}
            onMouseEnter={this.handleFocus}
            onMouseLeave={this.handleFocus}
            onClick={() => remove(index)}
            />
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
