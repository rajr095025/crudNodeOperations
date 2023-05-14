const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');
const UserRoute = require('./routes/user.js')

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});


app.use('/user',UserRoute)

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});