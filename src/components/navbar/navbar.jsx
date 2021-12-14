import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <nav class="navbar">
      <Link class="title" to="/">
        Zack Roth
      </Link>
      <div class="links-container">
        <Link className="link" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/tutoring">
          Tutoring
        </Link>
        <Link className="link" to="/contact-me">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
