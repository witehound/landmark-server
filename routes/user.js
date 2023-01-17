const router = require("express").Router();
const { registerUser, loginUser } = require("../controller/user.js");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
