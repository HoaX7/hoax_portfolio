const User = require("../models/User");
const Profile = require("../models/Profile");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

module.exports = {
  async create(req, res) {
    const { secret, email, username } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user)
        return res.status(422).send({
          error: true,
          message: "User already exists",
        });
      const newUser = new User({
        secret,
        email,
        username,
      });
      newUser.save((err, doc) => {
        if (err) throw err;
        return res.status(200).send({
          success: true,
          data: doc,
          metadata: {},
        });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: true,
        message: "internal server error",
      });
    }
  },
  async createProfile(req, res) {
    try {
      const user = await User.findById(req.body.userid);
      if (!user)
        return res.status(422).send({
          error: true,
          message: "User does not exists",
        });
      const newProfile = new Profile(req.body);
      newProfile.save((err, doc) => {
        if (err) throw err;
        return res.status(200).send({
          success: true,
          data: doc,
          metadata: {},
        });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: true,
        message: "internal server error",
      });
    }
  },
  async updateProfile(req, res) {
    try {
      await Profile.findByIdAndUpdate(
        req.body._id,
        req.body,
        { new: true },
        (err, doc) => {
          if (err) throw err;
          return res.status(200).send({
            success: true,
            data: doc,
          });
        }
      );
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: true,
        message: "internal server error",
      });
    }
  },
  async getProfile(req, res) {
    try {
      const result = await Profile.find({
        userid: req.query.userid,
      });
      if (!result) throw result;
      return res.status(200).send({
        success: true,
        data: result[0],
        metadata: {},
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: true,
        message: "internal server error",
      });
    }
  },
  async login(req, res) {
    try {
      const { secret, email } = req.query;
      const user = await User.findOne({ email }).select("+secret");
      if (!user)
        return res.status(404).send({
          error: true,
          message: "user does not exist",
        });
      const isMatch = await bcrypt.compare(secret, user.secret);
      if (!isMatch)
        return res.status(206).send({
          error: true,
          message: "Invalid password",
        });
      const token = crypto.randomBytes(64).toString("base64");
      res.cookie("token", token);
      delete user.secret;
      Object.assign(user, { token });
      return res.status(200).send({ success: true, data: user });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: true,
        message: "server error",
      });
    }
  },
  async downloadCV(req, res) {
    try {
      const file = `${__dirname}/../assets/images/cv.pdf`;
      return res.download(file, "resume.pdf");
      // return res.sendFile(file, (err) => console.log("file sent"))
    } catch (err) {
      return res.status(500).send({
        error: true,
        message: "An unexpected error occured"
      })
    }
  }
};
