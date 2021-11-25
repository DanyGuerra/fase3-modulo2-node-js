var express = require("express");
var router = express.Router();
const db = require("../db");
const User = require("../db/models").User;
const {
  getAllUsers,
  createUser,
  getUserById,
  deleteUserById,
  putUserById,
} = require("../controllers/Users");

/* GET users listing. */
router.get("/", getAllUsers);

router.post("/", createUser);

router.get("/:id", getUserById);

router.put("/:id", putUserById);

router.delete("/:id", deleteUserById);

module.exports = router;
