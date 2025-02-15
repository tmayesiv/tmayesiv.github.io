const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  displayName: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("User", userSchema);

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;