// const db = require('../models/algoVerseModels');
// const uuid = require('uuid');
// const bcrypt = require('bcryptjs');

// const loginController = {};

// loginController.login = (req, res, next) => {
//   console.log('reached login controller');
//   // console.log(req.body);
//   const values = [ req.body.username, req.body.password ]
//   const text = 
//   `SELECT true
//   FROM users
//   WHERE username = $1 AND password = $2;`
//   db.query(text, params)
//       .then((receive) => {
//           res.locals.authen = receive.rows;
//           return next();
//       })
// };


// loginController.verifySession = (req, res, next) => {
//   console.log('verifying session');
// }


// loginController.createSession = (req, res, next) => {
//     console.log('creating session');
//     const [ username ] = req.body;
//     const session_id = uuid.v4();
//     const values = [ session_id, username ];
//     const text = `
//     UPDATE users
//     SET session_id = $1
//     WHERE username = $2;
//     `
//     db.query(text, values)
//       .then((response) => {
//         res.cookie("session_id", session_id, {
//           httpOnly: true,
//           secure: true
//         });
//         res.cookie("username", username);
//         return next();
//       })
// };

// loginController.signUp = (req, res, next) => {
//   console.log('signing up');
//   const [ username, password ] = req.body;
//   const params = [ username, password ];
//   const text = `
//   INSERT INTO users (username, password, score)
//   VALUES ($1, $2, '0');
//   `
//   db.query(text, values)
//     .then((response) => {
//       console.log('signed up!');
//       return next();
//     })
// };