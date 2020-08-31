import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [curLink, setCurLink] = useState("/");

  const links = [
    { id: 1, url: "/", label: "ClassVsFunction" },
    { id: 2, url: "/posts", label: "FetchPosts" },
    { id: 3, url: "/global", label: "useContext" },
    { id: 4, url: "/login", label: "LoginForm" },
    { id: 5, url: "/todo", label: "TodoApp" },
  ];

  return (
    <header>
      <Link to="/" onClick={() => setCurLink("/")}>
        <h2 className="heading">Aug20 Training</h2>
      </Link>
      <nav className="navbar">
        <ul className="navbar-nav">
          {links.map(({ id, url, label }) => (
            <li className="nav" key={id}>
              <Link
                to={url}
                className={`nav-link ${curLink === url ? "active" : ""}`}
                onClick={() => setCurLink(url)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
