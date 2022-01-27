import React, { useState } from 'react';
import axios from 'axios';

const Questionaire = (props) => {

  const [question, setQuestion] = useState('');
  const [questionName, setQuestionName] = useState('');
  const [answer, setAnswer] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [timeComplexity, setTimeComplexity] = useState('');
  const [spaceComplexity, setSpaceComplexity] = useState('');
  const [rightOrWrong, setResponse] = useState('');
  const [score, setScore] = useState(1);
  const [incorrect, log] = useState(3);


  
  const getNewQuestion = (score) => {
    console.log('Im in the button', score);
    axios.post('http://localhost:3000/getNewQuestion', {data: score} )
    .then((res) => {
      setQuestion(res.data[0].question);
      setQuestionName(res.data[0].question_name)
      setAnswer(res.data[0].answers);
      setDifficulty(res.data[0].difficulty);
      setSpaceComplexity(res.data[0].space_complexity);
      setTimeComplexity(res.data[0].time_complexity);
    })
  };


  const postToLeaderboard = (score) => {
    axios.post('http://localhost:3000/postToLeaderBoard', {data: score} )
    .then((res) => {
      console.log(res);
    });
  };


  const handleAnswer = (score) => {
    const newAnswer = {
      timeMessage: document.getElementById('timeInput').value,
      spaceMessage: document.getElementById('spaceInput').value,
    }
    // check if answer is correct,
      if (newAnswer.spaceMessage === spaceComplexity && newAnswer.timeMessage === timeComplexity) {
          setResponse('Correct!');
          setScore(score + 1);
          getNewQuestion(score + 1);
      } else {
          if (incorrect <= 0) {
            postToLeaderboard(score, incorrect);
            setScore(0);
            log(3);
            alert("Incorrect! Sorry, you lost! Try again?")
            location.reload();
          } else {
              log(incorrect - 1);
              setResponse('Incorrect, try again');
          }
      }
    };



  return (
    <div>
      <div className="imageClass">
        <img className="logo" src='./assets/algoverseidea1.png' alt='logo'/>
      </div>
      <div className="getNewQuestionDiv">
        <button  
          className="getAQuestion"
          onClick={() => {getNewQuestion(score)}}
        >Get a Question</button>
      </div>
      <div className="answerbox">Your Answer was... {rightOrWrong}</div>
      <div className="Num-diff-display">
        <p>Question#: {score}</p>
        <p>Difficulty: {difficulty}</p>
        <p>Tries left: {incorrect}</p>
      </div>
      <p className="questionName"> Question Name: {questionName}</p>
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
        onClick={() => {
          handleAnswer(score);
          document.getElementById('spaceInput').value = '';
          document.getElementById('timeInput').value = '';
        }}
      >SUBMIT</button>
    </div>
  )
};

export default Questionaire;