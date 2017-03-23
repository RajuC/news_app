var express = require('express');
var path    = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var flash = require('connect-flash');
var session = require('express-session');
var expValidator = require('express-validator');
var helpers = require('./lib/helpers');


var app = express();


// Create `ExpressHandlebars` instance with a default layout.
var hbs = exphbs.create({
    defaultLayout: 'layout',
    helpers      : helpers,

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        'shared/templates/',
        'views/partials/'
    ]
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// view engine

/*app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');*/

// routes

var routes = require('./routes/index');
var contact = require('./routes/contact');
var category = require('./routes/categories');
var subscribe = require('./routes/subscribe');
var country = require('./routes/country');
var post = require('./routes/post');
var error = require('./routes/error');




// body-parser middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// set public folder

app.use(express.static(path.join(__dirname, 'public')));


// express-sessions

app.use(session({
  secret: 'raju',
  saveUninitialized: true,
  resave: true
}));

// express validator

// In this example, the formParam value is going to get morphed into form body format useful for printing.
app.use(expValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


// connect flash

app.use(flash());

// global vars

app.use(function (req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user||null;
	next();
});



// api like stuff
app.use('/', routes);
app.use('/', contact);
app.use('/', subscribe);
app.use('/posts/category', category);
app.use('/posts/country', country);
app.use('/posts', post);
app.use('/error', error);



//set port

app.set('port', (process.env.PORT || 8081));

// start server

app.listen(app.get('port'), function(){
	console.log('Server started on port : ' + app.get('port'));
});