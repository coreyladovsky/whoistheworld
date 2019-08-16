import React from "react";
import Story from "./Story.js";
import Stories from "./Stories"
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Stories} />
        <Route path="/new" component={Story} />
      </div>
    </BrowserRouter>
  );
}

export default App;
