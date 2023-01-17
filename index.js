const express = require("express");
const app = express();

const { createMongooseConnection } = require("./utils/mongoose.js");

createMongooseConnection();

app.listen(8080, () => {
  console.log("[SUCCEES] Backend server started!");
});
