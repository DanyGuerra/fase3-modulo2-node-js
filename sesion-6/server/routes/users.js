var express = require("express");
var router = express.Router();
const db = require("../db");
const User = require("../db/models").User;

/* GET users listing. */
router.get("/", async function (req, res) {
  const users = await User.findAll();
  res.send({ users });
});

router.post("/", async function (req, res) {
  const body = req.body;
  const user = await User.create(body);
  res.status(201).send({ user });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = db.models.Users.findOne({ id });
  console.log(user);
  res.send(user);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const user = db.models.Users.updateOne({ id }, req.body);
  res.send(user);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const user = db.models.Users.remove({ id });
  res.status(200).send(user);
});

module.exports = router;
