import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <nav class="navbar">
      <Link class="title" to="/">
        zack roth
      </Link>
      <div class="links-container">
        <Link className="link" to="/about-me">
          about me
        </Link>
        <Link className="link" to="/projects">
          projects
        </Link>
        <Link className="link" to="/tutoring">
          tutoring
        </Link>
        <Link className="link" to="/contact-me">
          contact me
        </Link>
      </div>
    </nav>
  );
}
