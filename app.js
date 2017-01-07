'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const app = express();


// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// App Stacks
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ // parse application/x-www-form-urlencoded
    extended: false
}));
app.use(bodyParser.text({ // parse text/plain
    type: req => req.headers['content-type'] === 'text/plain'
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);


// Catch 404 and Forward to Error Handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// Error Handlers
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    // only print stacktrace in development, hide in production
    err = app.get('env') === 'development' ? err : {};
    res.render('error', {
        message: err.message,
        error: err
    });
});


module.exports = app;
