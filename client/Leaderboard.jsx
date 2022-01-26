import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

const Leaderboard = (props) => {

  const [leaders, setLeaders] = useState('');
  const [scores, setScores] = useState('');

    const getLeaderboard = () => {
    axios.get('http://localhost:3000/leaderboard')
    .then((res) => {
      setLeaders(res.data[0].username);
      setScores(res.data[0].scores);
      console.log('leaders', res.data[0])
    })
  }


  // render(getLeaderboard());
  // componentDidMount() {
  //   this.getLeaderboard();
  // }

  return (
    <div>
      <h1>In the Leaderboard</h1>
      <button
      className="getLeaders"
      onClick={() => {getLeaderboard()}}
      >Get Leaders</button>
      <p>Top leaders</p>
      <ol className="leaderboard">
          <li className="rank1">{leaders} {scores}</li>
          <li className="rank2">Name Score</li>
          <li className="rank3">Name Score</li>
          <li className="rank4">Name Score</li>
          <li className="rank5">Name Score</li>
      </ol>
    </div>
  )
};

export default Leaderboard;