import React, { useState, useEffect } from 'react';
import './styles.scss';
import axios from 'axios';

import Login from './Login.jsx'
import SignUp from './SignUp.jsx'
import Questionnaire from './Questionnaire.jsx';
import Leaderboard from './Leaderboard.jsx';
import algoVerseLogo from '../public/algoverse-logo.png';

const App = () => {
  const [login, authen] = useState(false)

  const verify = () => {
    authen(true);
  }

  const checkSession = () => {
    axios.get('http://localhost:3000/checkSession')
      .then((res) => {
        console.log("res & res.data from axios's get request: ");
        console.log(res);
        console.log(res.data);
        if (res.data === true) {
          authen(true);
        }
      })
  }

  checkSession();

  return (
    <div>
      { /* if user is not logged in */
        !login &&
        <div className='loginBox'>
          <img src={algoVerseLogo} alt='algoverse logo' width='200px' />
          <br />
          <Login verify={verify} />
          <SignUp />
        </div>
      }
      { /* if user is already logged in */
        login &&
        <div className='displayBox'>
          <div className='question-section'>
            <Questionnaire />
          </div>
          <div className='leaderboard'>
            <Leaderboard />
          </div>
        </div>
      }
    </div>
  )
  if (login === false) {
    return (
      login &&
      <div className='loginBox'>
        <Login verify={verify} />
        <SignUp />
      </div>
    )
  } else {
    return (
      <div className='displayBox'>
        <div className='question-section'>
          <Questionnaire />
        </div>
        <div className='leaderboard'>
          <Leaderboard />
        </div>
      </div>
    )
  }
}

export default App;