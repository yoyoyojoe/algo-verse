const express = require('express');
const router = express.Router();
const path = require('path');
const appController = require('../controllers/appControllers');
const loginController = require('../controllers/loginControllers');


router.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../../build/index.html'));
});

router.get('/checkSession', loginController.verifyCookies, (req, res) => {
  return res.status(200).send(res.locals.cookies);
})

router.post('/login', loginController.login, loginController.createSession, (req, res) => {
  return res.status(200).send(res.locals.authen);
});

router.post('/registerUser', loginController.createSession, loginController.signUp, (req, res) => {
  return res.sendStatus(200);
});

router.post('/getNewQuestion' , appController.getNewQuestion, (req, res) => {
  console.log('newQuestions');
  return res.status(200).send(res.locals.algorithm);
});

router.post('/postToLeaderBoard', appController.postLeaderBoard, appController.getLeaderBoard, (req, res) => {
  return res.status(200).send(res.locals.leaderboard);
});

router.get('/leaderboard', appController.getLeaderBoard, (req, res) => {
  return res.status(200).send(res.locals.leaderboard);
});

// router.post('/postToLeaderboard', appController.postScore, appController.getLeaderBoard, (req, res) => {
//   console.log('routing to leaderboard');
//   return res.status(200).send(res.locals.leaderboard);
// });

// router.post('/login', loginController.setCookie, (req, res) => {
//   console.log('routing to login');
  
//   res.status(200).send(res.locals.username)
// });

// router.post('/signup', loginController.createUser, (req, res) => {
//   console.log('routing to signup');
  
//   res.status(200).send(res.locals.username)
// });

module.exports = router;