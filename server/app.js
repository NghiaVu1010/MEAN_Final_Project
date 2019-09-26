// These are modules that are installed from NPM and are imported into this file
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require("hbs");
const session = require('express-session');

// Create routes (or a file path) to the js files that will contain AJAX requests
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var leaguesRouter = require('./routes/leagues');
var teamsRouter = require('./routes/teams');
var adminRouter = require('./routes/admin');

// Connect express to the APP
var app = express();

// Enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret sauce',
  resave: true,
  saveUninitialized: true
}))

// Connect the handlebars partials to be used with views
hbs.registerPartials(__dirname + '/views/partials');

// Routers for each call
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/leagues', leaguesRouter);
app.use('/teams', teamsRouter);
app.use('/admin', adminRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;