import React, { useState, useEffect } from 'react';
import './styles.scss';
import axios from 'axios';

import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Questionaire from './Questionaire.jsx';
import Leaderboard from './Leaderboard.jsx';

const App = () => {
  const [login, authen] = useState(false)

  const verify = () => {
    authen(true);
  }


  const checkSession = () => {
    axios.get('http://localhost:3000/checkSession')
      .then((response) => {
        console.log('this is from app', response.data);
        if (response.data === true){
          authen(true);
        }
      })
  }
  
  checkSession();

  if (login === false) {
    return (
      <div className='loginBox'>
        <Login verify={verify} />
        <Signup />
      </div>
    )
  } else {
    return (
      <div className='displayBox'>
        <div className='question-section'>
          <Questionaire />
        </div>
        <div className='leaderboard'>
          <Leaderboard />
        </div>
      </div>
    )
  }
}

export default App;