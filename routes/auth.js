const passport = require('passport')
const Router= require('express').Router()

  Router.get(
    '/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  Router.get(
    '/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/portfolio');
    }
  );

  Router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  Router.get('/current_user', (req, res) => {
    res.send(req.user);
  });

  module.exports=Router
