const bcrypt = require("bcrypt");

const generateHash = async (round, pass) => {
  const salt = await bcrypt.genSalt(round);
  return await bcrypt.hash(pass, salt);
};

const decodeHash = async (userpass, dbpass) => {
  return await bcrypt.compare(dbpass, userpass);
};

module.exports = {
  generateHash,
  decodeHash,
};
