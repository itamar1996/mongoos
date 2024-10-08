const { createUser, getUserProfile } = require("../services/userService")

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
    const user = await getUserProfile(req)
    if(user)
    {
      res.status(200).json({
        msg:user
      })
      return
    }
    else {
      return res.status(404).json({ msg: "User not found" });
    }
  } catch (err) {
    res.status(400).json(err)
  }
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