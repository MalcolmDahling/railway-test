const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const indexRouter = require('./routes/index');
const testRouter = require('./routes/test')

const app = express();

require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/test', testRouter);


MongoClient.connect(process.env.MONGODB, {

    useUnifiedTopology:true
})
    .then(client => {
        console.log('Connected to DB.');
        app.locals.db = client.db('railway-test');
    });



    

module.exports = app;
