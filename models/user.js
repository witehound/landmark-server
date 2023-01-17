const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 2,
      max: 20,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
