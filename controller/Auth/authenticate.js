const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Uno tokent in header" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { userId } = decoded;

    req.user = { userId };
    next();
  } catch (error) {
    res.status(401).json({ error: "the token is unvalid " });
  }
};

module.exports = authenticate;
