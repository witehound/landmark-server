const express = require("express");
const app = express();
const { createMongooseConnection } = require("./utils/mongoose.js");
const pinRouter = require("./routes/pin.js");

createMongooseConnection();
app.use(express.json());

app.listen(8080, () => {
  console.log("[SUCCEES] Backend server started!");
});

app.use("/api/pin", pinRouter);
