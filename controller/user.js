const User = require("../models/user.js");
const { generateHash, decodeHash } = require("../utils/bcrypt");
const { saltLevel } = require("../utils/constants.js");

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const newPassword = generateHash(saltLevel, password);
    const newUser = new User({
      userName,
      email,
      password: newPassword,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser._id);
  } catch (error) {
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      userName: req.body.userName,
    });
    if (!user) {
      res.status(400).json({ message: "wrong password or username" });
    }
    const valiPassword = decodeHash(req.body.password, user.password);
    if (!valiPassword) {
      res.status(400).json({ message: "wrong password or username" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
