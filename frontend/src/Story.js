import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios  from 'axios'
import "react-quill/dist/quill.snow.css";

function Story() {
  const [text, setText] = useState("");
  const [err, setErr] = useState("")

  function handleSubmit(e) {
      e.preventDefault();
      try {
          axios.post("/stories", {story: text})
      } catch (err) {
          setErr(err)
      }
  }

  return (
    <form onSubmit={handleSubmit}>
      <ReactQuill value={text} onChange={value => setText(value)} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Story;
