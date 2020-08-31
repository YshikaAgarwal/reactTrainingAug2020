import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ClassVsFunction from "./components/classVsFunction/ClassVsFunction";
import FetchPosts from "./components/posts/FetchPosts";
import SinglePost from "./components/posts/SinglePost";
import GlobalPage from "./components/global/GlobalPage";
import LoginPage from "./components/login/LoginPage";
import TodoApp from "./components/TodoApp";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ClassVsFunction} />
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
