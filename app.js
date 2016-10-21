var express = require('express')
var app = express()
var layout = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')
var flash = require('connect-flash')
var session = require('express-session')
var bcrypt = require('bcrypt')

var mongoose = require('mongoose')
mongoose.Promise = global.Promise
//mongoose.connect('mongodb://localhost/donut-shop')

//must be on top
dotenv.load({path: '.env.' + process.env.NODE_ENV})
mongoose.connect(process.env.MONGO_URI)

//view engine must be before app.layout
app.set('view engine', 'ejs')
app.use(layout)

// must be before passport
app.use(session({
  secret: process.env.EXPRESS_SECRET,
  resave: true,
  saveUninitialized: true
}))
app.use(flash())

// app.use(passport.initialize())
// app.use(passport.session())

//should be before routes
app.use(express.static(__dirname + '/public'))

var frontendRoutes = require('./routes/donuts')
var ajaxRoutes = require('./routes/donuts_api')

var usersRoutes = require('./routes/users')
var usersAPIRoutes = require('./routes/users_api')

//bodyParser must before all the routes
app.use(bodyParser.json()) // to parse ajax json req
app.use(bodyParser.urlencoded({
  extended: true
})) // to parse form submitted data

app.use('/donuts', frontendRoutes) // only render ejs files
app.use('/api/donuts', ajaxRoutes) // only handle ajax request

app.use('/', usersRoutes)
app.use('/api/users', usersAPIRoutes)

app.listen(process.env.PORT || 3000)
console.log('Server started')
