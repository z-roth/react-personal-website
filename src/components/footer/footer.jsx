import React from "react";
import "./footer.css";
import linkedInIcon from "../../icons/iconmonstr-linkedin-3.svg";
import emailIcon from "../../icons/iconmonstr-email-4.svg";
import githubIcon from "../../icons/iconmonstr-github-1.svg";

export default function Footer() {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/zacharyrroth/">
        <img src={linkedInIcon} width="48px" alt="Linkedin" />
      </a>
      <a href="mailto:roth.z@northeastern.edu">
        <img src={emailIcon} width="48px" alt="Email" />
      </a>
      <a href="https://github.com/z-roth">
        <img src={githubIcon} width="48px" alt="GitHub" />
      </a>
    </footer>
  );
}
