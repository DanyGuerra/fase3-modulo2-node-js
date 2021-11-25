var express = require("express");
var router = express.Router();
const db = require("../db");
/* GET users listing. */
router.get("/", function (req, res) {
  const users = db.models.Users.findMany();
  res.send({ usuarios: users });
});

router.post("/", (req, res) => {
  const body = req.body;
  const user = db.models.Users.createOne(body);
  res.status(201).send(user);
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
