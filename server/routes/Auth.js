const express = require("express");

const router = express.Router();

const { signUp, logIn, getUserDetails } = require("../controllers/Auth");
const { auth } = require("../middlewares/Auth");

router.post("/sign-up", signUp);
router.post("/log-in", logIn);
router.get("/user-data", auth, getUserDetails);

module.exports = router;
