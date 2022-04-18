const express = require("express");
const router = express.Router();
const userController = require("../controller/user-controller");

router.post("/register", userController.RegisterUser);
router.get("/getallusers", userController.getUsers);
router.post("/login", userController.login);
router.patch("/:id", userController.updateuser);
router.get("/:uid", userController.getuserById);

module.exports = router;
