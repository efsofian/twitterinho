import React, { Component } from 'react';

import './Home.css';
import TweetBox from '../../components/TweetBox';
import Tweet from '../../components/Tweet';
import { tweets } from '../../constants';
import moment from 'moment';

class Home extends Component {
  state = {
    tweets,
  };
  publish = tweet => {
    const { tweets } = this.state;
    this.setState({
      tweets: [{
        avatar: 'https://www.pokepedia.fr/images/thumb/d/d1/Pikachu_de_Sacha.png/800px-Pikachu_de_Sacha.png',
        username: 'Pikachu',
        fullname: 'sky triz',
        content: tweet,
        date: moment().format('DD/MM/YYYY'),
      },
    ...tweets,
  ],
    });
  };

  remove = index => {
    const { tweets } = this.state;
    this.setState({ tweets: tweets.filter((tweet, i) => i !== index)})
  };


  render() {
    const { tweets } = this.state;
    return (
      <div className="homepage">
        <TweetBox publish={this.publish}/>
        {tweets.map((tweet, index) => (
          <Tweet
          key={index}
          index={index}
          remove={this.remove}
          {...tweet}
          />
        ))}
      </div>
    );
  }
}


export default Home;
