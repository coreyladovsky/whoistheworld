const db = require("./index.js");
const faker = require("faker");

let stories = [];

for (let i = 0; i < 25; i++) {
  let title = faker.lorem.sentence();
  let story = faker.lorem.paragraphs();
  let str = `('${title}', '${story}')`;
  stories.push(str);
}

stories = stories.join(", ")

db.none("INSERT INTO stories(title, story) VALUES " + stories + ";")
.catch(
  err => {
    console.log(err);
  }
);
