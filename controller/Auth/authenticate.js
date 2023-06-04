const jwt = require("jsonwebtoken");

// Define middleware function to authenticate requests
const authenticate = (req, res, next) => {
  // Get token from request headers
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    // Return 401 Unauthorized if token is missing
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify token and extract user information
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { userId } = decoded;

    // Attach user information to request object for use in route handlers
    req.user = { userId };

    // Call next middleware function
    next();
  } catch (error) {
    // Return 401 Unauthorized if token is invalid or expired
    res.status(401).json({ error: "Somthing went wrong" });
  }
};

module.exports = authenticate;
