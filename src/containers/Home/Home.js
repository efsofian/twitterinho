import React from 'react';
import './Home.css';
import TweetBox from '../../components/TweetBox';
import Tweet from '../../components/Tweet';
import { tweets } from '../../constants';


const Home = ({ children }) => (
    <div className="homepage">
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Tweet
        key={index}
        {...tweet}
        />
      ))}
    </div>
);

export default Home;
