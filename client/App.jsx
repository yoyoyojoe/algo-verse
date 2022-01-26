import React, { useState, useEffect } from 'react';
import './styles.scss';
// import axios from 'axios';

import Questionaire from './Questionaire.jsx';
import Leaderboard from './Leaderboard.jsx';

const App = () => {

  return (
    <div>
      <h1>AlgoVerse</h1>
      <div className='question-section'>
        <Questionaire />
      </div>
      <div className='leaderboard'>
        <Leaderboard />
      </div>
    </div>
  )
}

export default App;