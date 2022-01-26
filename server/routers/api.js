const express = require('express');
const router = express.Router();
const path = require('path');

const appController = require('../controllers/appControllers');


router.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../../index.html'));
});

router.get('/getNewQuestion', appController.getNewQuestion, (req, res) => {
  console.log('newQuestions');
  return res.status(200).send(res.locals.algorithm)
});

router.get('/leaderboard', appController.getLeaderBoard, (req, res) => {
  console.log('routing to leaderboard');
  return res.status(200).send(res.locals.leaderboard);
});

// router.post('/login', loginController.setCookie, (req, res) => {
//   console.log('routing to login');
  
//   res.status(200).send(res.locals.username)
// });

// router.post('/signup', loginController.createUser, (req, res) => {
//   console.log('routing to signup');
  
//   res.status(200).send(res.locals.username)
// });

module.exports = router;