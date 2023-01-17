const mongoose = require("mongoose");
require("dotenv").config();

const createMongooseConnection = () => {
  mongoose
    .connect(process.env.MONGOOSE_URL)
    .then(() => {
      console.log("[SUCCEES] Monodb connected!");
    })
    .catch(() => {
      console.log("[Failure] Monodb faiiled to connect!");
    });
};

module.exports = {
  createMongooseConnection,
};
