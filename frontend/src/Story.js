import React, {useState} from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Story(){
    const [text, setText] = useState("")

    return (
      <ReactQuill value={text} onChange={(value) => setText(value)} />
    );
}

export default Story;