import React from 'react';
import PropTypes from 'prop-types';
import './Tweet.css';

  const Tweet = ({ fullname, avatar, content, username, date }) => (
    <div>
      <div className="data">
        <strong>{username}</strong>
      </div>
      <div className="avatar">
        <div className="infos">
          <img src={avatar} alt="presentation" />
        </div>
        <div className="content">
        <p>{content}</p>
        </div>
      </div>
    </div>
  );

Tweet.propTypes = {
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default Tweet;
