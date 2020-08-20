import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchSinglePost() {
      try {
        const postId = props.match.params.postId;
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchSinglePost();
  }, [props.match.params.postId]);

  return (
    <div className="container">
      <section className="formContainer" style={{ width: "600px" }}>
        <h1>SinglePost</h1>
        {Object.keys(post).length > 0 ? (
          <div>
            <p>User Id : {post.userId}</p>
            <p>Post Id : {post.id}</p>
            <p>Title : {post.title}</p>
            <p>Body : {post.body}</p>
          </div>
        ) : (
          <h4>Loading Single Post...</h4>
        )}
        <Link to={"/posts"}>
          <button>Back To All Posts</button>
        </Link>
      </section>
    </div>
  );
};

export default SinglePost;
