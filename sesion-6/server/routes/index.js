var express = require("express");
var router = express.Router();
var users = require("./users");
var auth = require("./auth");
var restricted = require("./restricted.js");
var authentication = require("../middlewares/authentication");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express ♥️" });
});

router.use("/users", users);
router.use("/login", auth);
router.use("/restricted", authentication, restricted);

module.exports = router;
