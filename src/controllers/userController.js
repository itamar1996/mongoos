const { createUser } = require("../services/userService")

const register = async (req, res) => {
  try {    
    await createUser(req.body)
    res.status(201).json({
      msg:"user created"
    })
  } catch (err) {
    res.status(400).json(err)
  }
};

const getProfile = async (req, res) => {
  try {
  } catch (err) {}
};

const setSettings = async (req, res) => {
  try {
    
  } catch (err) {}
};

module.exports = {
  register,
  getProfile,
  setSettings,
};