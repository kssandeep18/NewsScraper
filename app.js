var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var firebase = require('firebase')

var router = require('./routes/routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var firebaseConfig = {
  apiKey: "AIzaSyALzxm-y5LKpYvUoSiHirumKxsDMp4sIT8",
  authDomain: "news-scraper-2421c.firebaseapp.com",
  databaseURL: "https://news-scraper-2421c.firebaseio.com",
  projectId: "news-scraper-2421c",
  storageBucket: "news-scraper-2421c.appspot.com",
  messagingSenderId: "34379054726",
  appId: "1:34379054726:web:a49b4ac00b4096d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = app;