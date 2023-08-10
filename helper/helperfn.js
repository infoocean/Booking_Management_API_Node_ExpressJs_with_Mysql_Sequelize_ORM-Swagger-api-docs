const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//generate authorization token
exports.generateauthorizationToken = async () => {
  const authorizationtoken = jwt.sign(
    {
      email: process.env.JWT_AUTH_EMAIL,
      password: process.env.JWT_AUTH_PASSWORD,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "12h",
    }
  );
  return authorizationtoken;
};

//generate token
exports.generateToken = async (payload) => {
  const logintoken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "8h",
  });
  return logintoken;
};

//decode token
exports.decodeToken = async (token) => {
  const decodetoken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  return decodetoken;
};

//byceipt password
exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
//encript password
exports.verifyPassword = async (currpassword, dbpassword) => {
  return await bcrypt.compare(currpassword, dbpassword);
};


