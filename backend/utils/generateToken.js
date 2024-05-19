import jwt from "jsonwebtoken";

const generateToken = (res, USER_ID) => {
  const token = jwt.sign({ USER_ID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt_token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 30 * 24 * 3600 * 1000,
  });

  return token;
};

export default generateToken;
