const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

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



async function init(){
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('Connected to DB');
    }
    
    catch (err) {
        console.log(err);
    }
}

init();



module.exports = app;
