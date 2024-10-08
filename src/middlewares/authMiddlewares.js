const jwt = require("jsonwebtoken");

const onlyCommanders = async (req, res, next) => {
  try {
    // get the token from cookie
    const token = req.cookies.token;
    // verify
    const userData = await jwt.verify(token, process.env.TOKEN_SECRET);
    if (userData.role !== "commander") {
      res.status(403).send("shtzchhhhhhhh....")
    }
    // add the user to the req object
    req.user = userData;
    // call next
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send(err.message);
  }
};

const onlySoldiersAndCommanders = async (req, res, next) => {
  try {
    // get the token from cookie
    const token = req.cookies.token;
    // verify
    const userData = await jwt.verify(token, process.env.TOKEN_SECRET);
    // add the user to the req object
    req.user = userData;
    // call next
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send(err.message);
  }
};

module.exports = {
  onlyCommanders,
  onlySoldiersAndCommanders,
};