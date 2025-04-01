router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Basic server-side validation
  if (!email || !password) {
      return res.render('login', { error: "Please fill in all fields." });
  }

  // Mock user authentication (replace with DB lookup)
  if (email === "test@example.com" && password === "password123") {
      res.redirect('/profile');
  } else {
      res.render('login', { error: "Invalid email or password." });
  }
});
// Google Auth
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/profile');
    }
);

// Facebook Auth
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/auth/facebook/callback', 
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/profile');
    }
);
