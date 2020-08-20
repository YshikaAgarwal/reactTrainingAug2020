import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import FetchPosts from "./components/pages/FetchPosts";
import SinglePost from "./components/pages/SinglePost";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={FetchPosts} />
        <Route exact path="/posts/:postId" component={SinglePost} />
      </Switch>
    </Router>
  );
}

export default App;
