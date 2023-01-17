const pin = require("../models/pin.js");

const createNewPin = async (req, res) => {
  const newPin = new pin(req.body);

  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (err) {
    res.status(500).json(err._message);
  }
};

const getAllPins = async (req, res) => {
  try {
    const allPins = await pin.find();
    res.status(200).json(allPins);
  } catch (err) {
    res.status(500).json(err._message);
  }
};

module.exports = {
  createNewPin,
  getAllPins,
};
