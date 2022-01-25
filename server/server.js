const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const apiRouters = require('./routers/api')

// const algoVerseController = require('./controllers/algoVerseController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/build", express.static(path.resolve(__dirname, "../build")));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

app.get("/bundle.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build/bundle.js"));
  });

app.use('/api/', apiRouters);



// app.post('/login', failForwardController.login, (req, res) => {
//     return res.status(200).send(res.locals.authen);
// });


app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));



app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => {
    console.log(`Server is listening on port: http://localhost:${PORT}/`)
});



module.exports = app;