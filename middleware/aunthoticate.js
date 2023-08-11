const jwt = require("jsonwebtoken");

const verifyAuthToken = (req, res, next) => {
  const authorizationtoken = req.headers["authorization"];
  if (authorizationtoken === undefined) {
    return res
      .status(403)
      .send({ message: "A token is required for authorization" });
  }
  const splitauthorizationtoken = authorizationtoken.split(" ")[1];
  if (!splitauthorizationtoken) {
    return res
      .status(403)
      .send({ message: "A token is required for authorization" });
  }
  try {
    jwt.verify(splitauthorizationtoken, process.env.JWT_SECRET_KEY);
  } catch (err) {
    return res.status(401).send({ message: "Invalid authorization Token" });
  }
  return next();
};

const verifyLoginToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
      if (err) {
        return res.status(401).json({
          error: true,
          message: "Invalid access login token",
        });
      }
      req.decoded = decoded;
      if (req.decoded && req.decoded?.id == undefined) {
        return res.status(401).json({
          success: false,
          message: "Invalid login token",
        });
      }
      next();
    });
  } else {
    return res.status(403).send({
      error: true,
      message: "No Login token provided.",
    });
  }
};

module.exports = { verifyAuthToken, verifyLoginToken };
