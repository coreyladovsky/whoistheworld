import React, { useState, useEffect } from "react";
import axios from "axios";

function Stories() {
  const [storiesViewed, setStoriesViewed] = useState([]);
  const [futureStories, setFutureStories] = useState([]);
  const [currStory, setCurrStory] = useState({});
  useEffect(() => {
    getRandomStory();
  }, [])

  async function getRandomStory() {
      try {
          let res = await axios.get("/stories/randomStory")
          setCurrStory(res.data.story);
      } catch(err){
          console.log(err)
      };
  }

  function nextStory() {
    setStoriesViewed([...storiesViewed, currStory]);
    if(!futureStories.length) {
        getRandomStory()
    } else {
        setCurrStory(futureStories[0]);
        setFutureStories(futureStories.slice(1))
    }
  }

  function previousStory() {
      if(storiesViewed.length) {
          setFutureStories([currStory, ...futureStories]);
          setCurrStory(storiesViewed[storiesViewed.length - 1])
          setStoriesViewed(storiesViewed.slice(0, -1))
        } 
  }

  return (
      <div>
        {currStory.story}
        <button onClick={previousStory}>
          Previous  
        </button>
        <button onClick={nextStory}>
          Next  
        </button>
      </div>
  )
}

export default Stories;
