import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import FetchPosts from "./components/pages/FetchPosts";
import SinglePost from "./components/pages/SinglePost";
import GlobalPage from "./components/pages/GlobalPage";
import LoginPage from "./components/pages/LoginPage";
import TodoApp from "./components/pages/TodoApp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={FetchPosts} />
        <Route exact path="/posts/:postId" component={SinglePost} />
        <Route exact path="/global" component={GlobalPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/todo" component={TodoApp} />
      </Switch>
    </Router>
  );
}

export default App;
