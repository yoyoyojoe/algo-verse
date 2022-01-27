const db = require('../models/algoVerseModels');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');

const loginController = {};

loginController.login = (req, res, next) => {
  console.log('verifying session');
  const { username, password } = req.body;
  if (!username) return next(new Error("Please input a valid username"));
  const values = [ username ];
  const text = `
  SELECT * FROM users
  WHERE username = $1;
  `
  db.query(text, values)
    .then((response) => {
      if (!response.rows.length) {
        return next(new Error("Username not found"));
      } 
      const hash = response.rows[0].password;
      if (bcrypt.compareSync(password, hash)) {
        res.locals.authen = true;
        return next();
      } else {
        return next(new Error("Password is incorrect"));
      }
    })
    .catch((err) => next(err));
}


loginController.createSession = (req, res, next) => {
    console.log('creating session');
    const { username } = req.body;
    const session_id = uuid.v4();
    const values = [ session_id, username ];
    const text = `
    UPDATE users
    SET session_id = $1
    WHERE username = $2;
    `
    db.query(text, values)
      .then((response) => {
        res.locals.session = session_id;
        res.cookie("session_id", session_id, {
          httpOnly: true,
          secure: true,
          maxAge: 900000
        });
        res.cookie("username", username);
        return next();
      })
      .catch((err) => next(err));
};

loginController.signUp = (req, res, next) => {
  console.log('signing up');
  console.log(req.body);
  const { session } = res.locals
  const { username, password } = req.body;
  console.log('this is after deconstruct');
  if (!username || !password) return next(new Error("Please do not leave username or password blank"));
  const hash = bcrypt.hashSync(password, 10);
  const values = [ username, hash, session ];
  const text = `
  INSERT INTO users (username, password, session_id, score)
  VALUES ($1, $2, $3,'0');
  `
  db.query(text, values)
    .then((response) => {
      console.log('signed up!');
      return next();
    })
    .catch((err) => next(err));
};

loginController.verifyCookies = (req,res, next) => {
  const { session_id } = req.cookies;
  const values = [ session_id ];
  const text = `
  SELECT * FROM users
  WHERE session_id = $1;
  `
  db.query(text, values)
    .then((response) => {
      console.log('checking if session matches db', response.rows.length)
      if (response.rows.length) {
        res.locals.cookies = true;
      }
      return next();
      
    })
}

module.exports = loginController;