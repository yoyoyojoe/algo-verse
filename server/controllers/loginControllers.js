const db = require('../models/algoVerseModels');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');

const loginController = {};

loginController.login = (req, res, next) => {
  console.log('reached login controller');
  // console.log(req.body);
  const values = [ req.body.username, req.body.password ]
  const text = 
  `SELECT true
  FROM users
  WHERE username = $1 AND password = $2;`
  db.query(text, params)
      .then((receive) => {
          res.locals.authen = receive.rows;
          return next();
      })
      .catch((err) => next(err));
};


loginController.verifySession = (req, res, next) => {
  console.log('verifying session');
  const { username, password } = req.body;
  if (!username) return next(new Error("Please input a valid username"));
  const text = `
  SELECT * FROM users
  WHERE username = $1;
  `
  const values = [ username ];
  db.query(text, values)
    .then((response) => {
      if (!response.rows.length) {
        return next(new Error("Username not found"));
      } 
      const hash = response.rows[0].password;
      if (bcrypt.compareSync(password, hash)) {
        return next();
      } else {
        return next(new Error("Password is incorrect"));
      }
    })
    .catch((err) => next(err));
}


loginController.createSession = (req, res, next) => {
    console.log('creating session');
    const [ username ] = req.body;
    const session_id = uuid.v4();
    const values = [ session_id, username ];
    const text = `
    UPDATE users
    SET session_id = $1
    WHERE username = $2;
    `
    db.query(text, values)
      .then((response) => {
        res.cookie("session_id", session_id, {
          httpOnly: true,
          secure: true
        });
        res.cookie("username", username);
        return next();
      })
      .catch((err) => next(err));
};

loginController.signUp = (req, res, next) => {
  console.log('signing up');
  const [ username, password ] = req.body;
  if (!username || !password) return next(new Error("Please do not leave username or password blank"));
  const hash = bcrypt.hashSync(password, 10);
  const params = [ username, hash ];
  const text = `
  INSERT INTO users (username, password, score)
  VALUES ($1, $2, '0');
  `
  db.query(text, values)
    .then((response) => {
      console.log('signed up!');
      return next();
    })
    .catch((err) => next(err));
};
