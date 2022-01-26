import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Questionaire = (props) => {

  const [question, getQuestion] = useState({
    question: '',
    answer: '',
    difficulty: '',
    timeComplexity: '',
    spaceComplexity: ''
  });




  const getNewQuestion = (() => {
    axios.get('http://localhost:3000/getNewQuestion')
    .then((res) => {
      getQuestion(res.data.events)
    })
  })

  const postToLeaderboard = ((score) => {
    axios({ method: 'POST', url: 'http://localhost:3000/toleaderboard', data: score })
    .then((res) => {
      console.log(res);
    });
  })


  function handleAnswer() {
    const newAnswer = {
      timeMessage: document.getElementById('timeInput').value,
      spaceMessage: document.getElementById('timeInput').value,
    }
    // check if answer is correct,
      if (newAnswer.spaceMessage === res.data.events.spaceComplexity && newAnswer.timeMessage === res.data.events.timeComplexity) {
        // if so, 
          // change answer variable to true

          // fetch a new question
          getNewQuestion();
      } else {
        // else, 
        // change answer variable to incorrect
        // send the count and username to leaderboard table (backend)
        postToLeaderboard();
        // reset the count
        // prompt a window to try again?
          // reload the page
      }
    };



  const [score, setScore] = useState(0);

  const [answer, setAnswer] = ["?"]

  return (
    <div>
      <div>
        <button  
          className="getAQuestion"
          onClick={() => {getNewQuestion()}}
        >Get a Question</button>
      </div>
      <div className="Num-diff-display">
        <p>Question#: {score}</p>
        <p>Difficulty: {res.data.events.difficulty}</p>
      </div>
      <p className="question"> Question: {res.data.events.question}</p>
      <p className="questionAnswer">Question answer: {res.data.events.answer}</p>
      <p className="instructions">
        this is how you answer the question: ...
      </p>
      <input
      className="timeInput"
      id="timeInput"
      placeholder="what is your time answer?"
      // onChange={(e) => (timeMessage = e.target.value)}
      // value={submission}
      >
      </input>
      <input
      className="spaceInput"
      id="spaceInput"
      placeholder="what is your space answer?"
      // onChange={handleChange}
      // value={submission}
      >
      </input>
      <div className="answerbox">Your Answer is... </div>
      <button 
        className="submitAnswer"
        onClick={() => {handleAnswer()}}
      >SUBMIT</button>
    </div>
  )
};

export default Questionaire;