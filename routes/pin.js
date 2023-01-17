const router = require("express").Router();
const { createNewPin, getAllPins } = require("../controller/pin.js");

router.post("/", createNewPin);
router.get("/", getAllPins);

module.exports = router;
