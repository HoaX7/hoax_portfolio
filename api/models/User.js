const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  secret: {
    type: "string",
    required: true,
    select: false,
  },
  username: {
    type: "string",
    required: true,
    unique: true,
  },
  email: {
    type: "string",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("secret")) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(this.secret, salt, (err, hash) => {
      if (err) return next(err);
      this.secret = hash;
      next();
    });
  });
});

const User = mongoose.model("users", userSchema);

module.exports = User;
