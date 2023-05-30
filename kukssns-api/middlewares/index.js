const jwt = require('jsonwebtoken');

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send('need login');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent('already login status');
    res.redirect(`/?error=${message}`);
  }
};

exports.verifyToken = (req, res, next) => {
  try{
    res.locals.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
    return next();
  } catch (error){
      // time expired
      if(error.name === 'TokenExpiredError') {
        return res.status(419).json({
          code: 419,
          message: 'Token is expired.',
        });
      }

      return res.status(401).json({
        code: 401,
        message: 'Token is unvalid.',
      });
  }
};