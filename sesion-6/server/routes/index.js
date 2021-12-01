var express = require("express");
var router = express.Router();
var users = require("./users");
var auth = require("./auth");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express ♥️" });
});

router.use("/users", users);
router.use("/login", auth);

module.exports = router;
