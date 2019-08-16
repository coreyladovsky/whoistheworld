var express = require("express");
var router = express.Router();
const {
  createStory,
  getStories,
  getRandomStory,
} = require("../queries/storyQueries");

router.post("/", createStory);
router.get("/", getStories);
router.get("/randomStory", getRandomStory);

module.exports = router;
