const express = require('express');
const router = express.Router();

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

router.get('/', (req, res) => res.render('home'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));
router.get('/profile', isAuthenticated, (req, res) => res.render('profile', { user: req.user }));
router.get('/cart', (req, res) => res.render('cart'));

module.exports = router;
