const db = require('../db/index');

const createStory = (req, res, next) => {
    console.log(req.body)
  db.one(
    "INSERT INTO stories(title, story) VALUES(${title}, ${story}) RETURNING *",
    req.body
  )
    .then(story => {
      res.status(200).json({
        story: story,
        status: "success",
        message: "NEW BOARD ADDED!",
      });
    })
    .catch(err =>{
        console.log(err)
        next(err)
    });
};

const getStories = (req, res, next) => {
    db.any("SELECT * FROM stories")
    .then(stories => {
        res.json({
            stories,
            status: "success",
            message: "RECEIVED ALL STORIES"
        })
    })
    .catch(err => next(err))
}

module.exports = { createStory, getStories}