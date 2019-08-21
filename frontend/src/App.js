import React from "react";
import Story from "./Stories/Story.js";
import Stories from "./Stories/Stories"
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/new" component={Story} />
        <Route exact path="/" component={Stories} />
    </BrowserRouter>
  );
}

export default App;
