const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  // console.log(token);
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: err.message });
      } else {
        req.decodedToken = decodedToken;
        console.log("hhhh")
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
}

module.exports = authenticate;
