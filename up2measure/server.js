var express = require('express');
var flash = require('connect-flash');
var app = express();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var firebase = require("firebase");
var passport = require('passport');
var session = require('express-session');
// var session = require('path');
var orm = require('./db/orm.js');
var PORT = 8080;

//Handlebars-------------------------------------------------------
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//-----------------------------------------------------------------

//Middleware-------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//session is used to keep the user logged in 
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 6000000 }, resave: true, saveUninitialized: true}))

//flash is used to show a message on an incorrect login
app.use(flash());

//passport middleware methods
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
//-----------------------------------------------------------------


//Routes-----------------------------------------------------------
require('./routes/html-routes.js')(app);

//-----------------------------------------------------------------
orm.connectToDB();

app.listen(PORT, function(){
	console.log('listening on port', PORT)
});

// Initialize Firebase
// TODO: Replace with your project's customized code snippet



