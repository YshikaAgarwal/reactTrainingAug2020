import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";

const FetchPosts = () => {
  console.log("Rerendering FetchPosts");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage; //  4
  const currentPagePosts = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = useCallback((pageNumber) => setCurrentPage(pageNumber), []);

  useEffect(() => {
    if (currentPage > Math.floor(posts.length / postsPerPage)) {
      setCurrentPage(1);
    }
  }, [postsPerPage, currentPage, posts.length]);

  useEffect(() => {
    async function fetchPosts() {
      console.log("fetching the posts");
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // setTimeout(() => setPosts(res.data), 4000);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="formContainer" style={{ width: "500px" }}>
        <h1>Posts</h1>
        <hr />
        <div className="postPerPage">
          <span>Posts per Page : </span>
          <input
            type="number"
            value={postsPerPage}
            onChange={(e) => setPostsPerPage(e.target.value)}
          />
        </div>
        {currentPagePosts.length <= 0 ? (
          <h4>Loading Posts...</h4>
        ) : (
          currentPagePosts.map(({ id, title }) => (
            <Link to={`/posts/${id}`} key={id}>
              <p>
                <b>{id} - </b>
                {title}
              </p>
            </Link>
          ))
        )}
        <hr />
        <Pagination
          totalPosts={posts.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default FetchPosts;
