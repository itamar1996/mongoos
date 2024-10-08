const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { UserModel } = require("../models/userModel");
const { use } = require("bcrypt/promises");
const { configDotenv } = require("dotenv");

const createUser = async (user) => {
  try {    
    const { user_name, password, role, area, units } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const dbUser = new UserModel({
      user_name,
      password: hashedPassword,
      role,
      area,
      units
    });
    await dbUser.save()
  } catch (err) {
    console.log(err)
    throw err
  }
};

const getUserProfile = async (req) => {
  try {
    const token = req.cookies.token;
    const userData = await jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("userData",userData);
    const userId = userData.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (err) {
    console.log(err)
    throw err
  }
};

module.exports = {
  getUserProfile,
  createUser,
};