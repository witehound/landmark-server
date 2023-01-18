const express = require("express");
const app = express();
const { createMongooseConnection } = require("./utils/mongoose.js");
const pinRouter = require("./routes/pin.js");
const userRouter = require("./routes/user.js");
const cors = require("cors");

createMongooseConnection();
app.use(express.json());
app.use(cors());

app.use("/api/pin", pinRouter);
app.use("/api/user", userRouter);
app.listen(8080, () => {
  console.log("[SUCCEES] Backend server started!");
});
