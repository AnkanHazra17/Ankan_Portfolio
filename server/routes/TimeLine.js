const express = require("express");

const { addTimeLine, getAllTimeLine } = require("../controllers/TimeLine");

const router = express.Router();

router.post("/add-timeline", addTimeLine);
router.get("/all-timelines", getAllTimeLine);

module.exports = router;
