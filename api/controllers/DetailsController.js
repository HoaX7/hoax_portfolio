const Details = require("../models/Details");
const User = require("../models/User");

module.exports = {
  async getAll(req, res) {
    try {
      const result = await Details.find({
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
  async create(req, res) {
      try {
        const user = await User.findById(req.body.userid);
        console.log(req.body.userid)
        if (!user)
          return res.status(404).send({
            error: true,
            message: "user does not exist",
          });
        const result = new Details(req.body);
        await result.save((err, doc) => {
          if (err) throw err;
          return res.status(200).send({
            success: true,
            data: doc,
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
  async patch(req, res) {
      try {
        await Details.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
          if (err) throw err;
          return res.status(200).send({
            success: true,
            data: doc
          })
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
          error: true,
          message: "internal server error",
        });
    }
  },
};
