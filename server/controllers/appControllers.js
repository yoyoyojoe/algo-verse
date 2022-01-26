const db = require('../models/algoVerseModels')

const appController = {};


// algoVerseController.difficulty = (req, res, next) => {
//   console.log('reached get state')
//   const text = 
//   `SELECT company, position, summary, core_values FROM public.users u
//   LEFT OUTER JOIN public.job_listings jl ON u._id = jl.user_id
//   WHERE progress = 'applied';`
//   db.query(text)
//       .then((received) => {
//           res.locals.listings = received.rows;
//           return next();
//       })
// };w

appController.getNewQuestion = (req, res, next) => {
  console.log('req.body is', req.body); 
  console.log('req.body.data is', req.body.data); 
  let { data } = req.body;
  console.log('score is', data);
  data = data + 3;
    const values = [ data ];
    console.log('values are', values);
    const text = 
    `SELECT * FROM algorithms
    WHERE question_id = $1;`;
    db.query(text, values)
        .then((received) => {
          console.log(received.rows);
          res.locals.algorithm = received.rows;
          return next();
        })
        .catch((err) => next(err));
};

// appController.getLeaderBoard = (req, res, next) => {
//     const text = 
//     `SELECT username, score FROM users
//     ORDER BY score desc;`
//     db.query(text)
//         .then((received) => {
//           console.log('this is from leaderboard', received.rows);
//           res.locals.leaderboard = received.rows;
//           return next();
//         });
// };

// appController.postScore = (req, res, next) => {
//   const [ score ] = req.body;
//   const values = [ score ]
//   const text = 
//   `UPDATE users
//   SET score = $1
//   WHERE username = 'test2'
//   `;
//   db.query(text, values)
//       .then(received => {
//         console.log('updated score in database!')
//         return next();
//       });
// };

// algoVerseController.deleteJobListing = (req, res, next) => {
//     // const params = [ req.body.level, req.body.id ]
//     // const text = 
//     // `DELETE FROM public.job_listings 
//     // WHERE progress = $1 AND _id ='Alfreds Futterkiste';`
//     // db.query(text)
//     //     .then(received => next());
// }

// algoVerseController.updateJobListing = (req, res, next) => {
    
// }

// appController.login = (req, res, next) => {
//     console.log('reached login controller');
//     // console.log(req.body);
//     params = [ req.body.username, req.body.password ]
//     text = 
//     `SELECT 1
//     FROM users
//     WHERE username = $1 AND password = $2;`
//     db.query(text, params)
//         .then((receive) => {
//             res.locals.authen = receive.rows;
//             return next();
//         })
// }

module.exports = appController;