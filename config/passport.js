// var passport = require('passport')
// var LocalStrategy = require('passport-local').Strategy
//
// var User = require('../models/user')
//
// passport.serialiseUser(function(user, done){
//   done(null, user.id)
// })
//
// passport.deserialiseUser(function(id, done){
//   User.findById(id, function(err, user){
//     done(err, user)
//   })
// })
//
// passport.use('local-signup', new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   passReqToCallback: true
// }, function(req, email, password, next){
//
//   User.findOne({'local.email': email}, function(err, user))
//
// }))
