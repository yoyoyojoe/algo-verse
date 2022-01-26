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
    console.log('reached get new questions');
    const text = 
    `SELECT * FROM algorithms
    WHERE question_id = 5;`;
    db.query(text)
        .then((received) => {
          console.log(received.rows);
          res.locals.algorithm = received.rows;
          return next();
        });
};

appController.getLeaderBoard = (req, res, next) => {
    const text = 
    `SELECT username, score FROM users
    ORDER BY score desc;`
    db.query(text)
        .then(received => {
          console.log('this is from leaderboard', received.rows);
          res.locals.leaderboard = received.rows;
          return next();
        });
};

// algoVerseController.deleteJobListing = (req, res, next) => {
//     // const params = [ req.body.level, req.body.id ]
//     // const text = 
//     // `DELETE FROM public.job_listings 
//     // WHERE progress = $1 AND _id ='Alfreds Futterkiste';`
//     // db.query(text)
//     //     .then(received => next());
// }



module.exports = appController;