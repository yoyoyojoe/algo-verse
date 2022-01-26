const db = require('../models/algoVerseModels')

const loginController = {};

loginController.login = (req, res, next) => {
  console.log('reached login controller');
  // console.log(req.body);
  params = [ req.body.username, req.body.password ]
  text = 
  `SELECT 1
  FROM users
  WHERE username = $1 AND password = $2;`
  db.query(text, params)
      .then((receive) => {
          res.locals.authen = receive.rows;
          return next();
      })
};



loginController.createSession = (req, res, next) => {
  console.log('creating session');
  // if user in res.locals is authenticated
  // create new session
};

loginController.signUp = (req, res, next) => {
  console.log('signing up');
  const [ username, password ] = req.body;
  const values = [ username, password ];
  const text = `
  SELECT * FROM users
  WEHERE $1 = $2;
  
  `
};