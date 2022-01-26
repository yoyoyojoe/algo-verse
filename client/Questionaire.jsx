import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Questionaire = (props) => {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [timeComplexity, setTimeComplexity] = useState('');
  const [spaceComplexity, setSpaceComplexity] = useState('');
  const [rightOrWrong, setResponse] = useState('');
  const [score, setScore] = useState(0);


  
  const getNewQuestion = (score) => {
    console.log('Im in the button', score);
    axios.post('http://localhost:3000/getNewQuestion', {data: score} )
    .then((res) => {
      setQuestion(res.data[0].question);
      setAnswer(res.data[0].answers);
      setDifficulty(res.data[0].difficulty);
      setSpaceComplexity(res.data[0].space_complexity);
      setTimeComplexity(res.data[0].time_complexity);
    })
  };

  // const getNewQuestion = () => {
  //   console.log('Im in the button');
  //   axios.get('http://localhost:3000/getNewQuestion')
  //   .then((res) => {
  //     setQuestion(res.data[0].question);
  //     setAnswer(res.data[0].answers);
  //     setDifficulty(res.data[0].difficulty);
  //     setSpaceComplexity(res.data[0].space_complexity);
  //     setTimeComplexity(res.data[0].time_complexity);
  //   })
  // };


  const postToLeaderboard = ((score) => {
    axios({ method: 'POST', url: 'http://localhost:3000/leaderboard', data: score })
    .then((res) => {
      console.log(res);
    });
  });


  function handleAnswer() {
    const newAnswer = {
      timeMessage: document.getElementById('timeInput').value,
      spaceMessage: document.getElementById('spaceInput').value,
    }
    // check if answer is correct,
      if (newAnswer.spaceMessage === spaceComplexity && newAnswer.timeMessage === timeComplexity) {
        // if so, 
          // change answer variable to true
          setResponse('Correct!');
          // increment score
          setScore(score + 1);
          // fetch a new question
          getNewQuestion(score);
      } else {
        // else, 
        // change answer variable to incorrect
        setResponse('');
        // send the count and username to leaderboard table (backend)
        postToLeaderboard();
        // reset the count
        setScore(0);
        // prompt a window to try again?
        alert("Incorrect! Sorry, you lost! Try again?")
          // reload the page
        getNewQuestion(score);
      }
    };



  return (
    <div>
      <div>
        <button  
          className="getAQuestion"
          onClick={() => {getNewQuestion(score)}}
        >Get a Question</button>
      </div>
      <div className="answerbox">Your Answer was... {rightOrWrong}</div>
      <div className="Num-diff-display">
        <p>Question#: {score}</p>
        <p>Difficulty: {difficulty}</p>
      </div>
      <p className="question"> Question: {question}</p>
      <p className="questionAnswer">Question answer: <pre>{answer}</pre></p>
      <p className="instructions">
        this is how you answer the question: ...
        CHEAT SHEET: time: {timeComplexity} space: {spaceComplexity}
      </p>
      <input
      className="timeInput"
      id="timeInput"
      placeholder="what is your time answer?"
      >
      </input>
      <input
      className="spaceInput"
      id="spaceInput"
      placeholder="what is your space answer?"
      >
      </input>
      <button 
        className="submitAnswer"
        onClick={() => {handleAnswer()}}
      >SUBMIT</button>
    </div>
  )
};

export default Questionaire;