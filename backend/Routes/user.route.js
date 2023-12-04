const express = require("express");
const { UserModel } = require("../Model/user.model");
const userRouter = express.Router();

userRouter.post("/contacts", async (req, res) => {
  try {
    const user = await UserModel(req.body);
    await user.save();
    res.status(200).send({ msg: "successful", user: user });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

userRouter.get("/contacts", async (req, res) => {
  try {
    const { q } = req.query;
    const quary = {};

    if (q) {
      quary.name = { $regex: q, $options: "i" };
    }
    const users = await UserModel.find(quary);

    res.status(200).send({ msg: "successful", users: users });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

userRouter.patch("/contacts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({_id: id}, req.body);
    const users = await UserModel.find();
    res.status(200).send({ msg: "successful", users : users });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

userRouter.delete("/contacts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete({_id: id});
    const users = await UserModel.find();
    res.status(200).send({ msg: "successful", users : users });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
})

module.exports = {
  userRouter,
};
