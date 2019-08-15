import React, {useState} from 'react';
import ReactQuill from "react-quill";

function Story(){
    const [text, setText] = useState("")

    return (
      <ReactQuill value={text} onChange={(e) => setText(e.target.value)} />
    );
}

export default Story;