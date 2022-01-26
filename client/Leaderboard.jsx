import React from 'react';

const Leaderboard = (props) => {

  const [leaders, getLeaderboard] = useState({
    username: '',
    score: '',
  })

  return (
    <div>
      <h1>In the Leaderboard</h1>
      <p>Top leaders</p>
      <ol className="leaderboard">
          <li className="rank1">Name Score</li>
          <li className="rank2">Name Score</li>
          <li className="rank3">Name Score</li>
          <li className="rank4">Name Score</li>
          <li className="rank5">Name Score</li>
      </ol>
    </div>
  )
};

export default Leaderboard;