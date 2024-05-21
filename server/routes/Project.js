const express = require("express");

const router = express.Router();

const { addProject, getAllProjects } = require("../controllers/Projects");

router.post("/add-project", addProject);
router.get("/all-projects", getAllProjects);

module.exports = router;
