var express = require("express");
var router = express.Router();
const { createStory, getStories } = require("../queries/storyQueries");

router.post("/", createStory);
router.get("/", getStories);

module.exports = router;
