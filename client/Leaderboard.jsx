import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = (props) => {

  const [leaders, setLeaders] = useState([
    { name: '', score: 0 },
    { name: '', score: 0 },
    { name: '', score: 0 },
    { name: '', score: 0 },
    { name: '', score: 0 },
  ])

  const [leaders1, setLeaders1] = useState('');
  const [scores1, setScores1] = useState('');

  const [leaders2, setLeaders2] = useState('');
  const [scores2, setScores2] = useState('');

  const [leaders3, setLeaders3] = useState('');
  const [scores3, setScores3] = useState('');

  const [leaders4, setLeaders4] = useState('');
  const [scores4, setScores4] = useState('');

  const [leaders5, setLeaders5] = useState('');
  const [scores5, setScores5] = useState('');

  console.log('leaders obj', leaders);

  const getLeaderboard = () => {
    axios.get('http://localhost:3000/leaderboard')
      .then((res) => {
        console.log('leaders', res);
        res.data.forEach((el, i) => {
          const { username, score } = el;
          setLeaders(prevLeaders => {
            prevLeaders[i] = { username, score }
          });
          // setScores({ [i]: el.score });
        })
        // setLeaders1(res.data[0].username);
        // setScores1(res.data[0].score);
        // setLeaders2(res.data[1].username);
        // setScores2(res.data[1].score);
        // setLeaders3(res.data[2].username);
        // setScores3(res.data[2].score);
        // setLeaders4(res.data[3].username);
        // setScores4(res.data[3].score);
        // setLeaders5(res.data[4].username);
        // setScores5(res.data[4].score);
      })
  }


  useEffect(() => {
    getLeaderboard();
  }, leaders)

  return (
    <div>
      <h1>Leaderboard</h1>
      <p>Top leaders</p>
      <ol className="leaderboard">
        <li className="rank1">{leaders1} {scores1}</li>
        <li className="rank2">{leaders2} {scores2}</li>
        <li className="rank3">{leaders3} {scores3}</li>
        <li className="rank4">{leaders4} {scores4}</li>
        <li className="rank5">{leaders5} {scores5}</li>
      </ol>
    </div>
  )
};

export default Leaderboard;