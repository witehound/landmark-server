const router = require("express").Router();
const { createNewPin, getAllPins, deletePin } = require("../controller/pin.js");

router.post("/", createNewPin);
router.get("/", getAllPins);
router.delete("/", deletePin);

module.exports = router;
