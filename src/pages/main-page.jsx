import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import AboutMe from "../components/about-me/about-me";
import introImage from "../images/IMG_1983.jpg";

import "./main-page.css";

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <div className="intro">
        <div className="intro-image-container">
          <img id="intro-image" src={introImage} alt="introduction" />
        </div>
        <div className="intro-text-container">
          <h1 className="greeting">
            <bold>Hi!</bold> I'm Zack.
          </h1>
          <h2 className="bio">
            I'm a third-year Computer Science student at Northeastern
            University. I'm also minoring in Startups and Design.
          </h2>
        </div>
      </div>
      <AboutMe />
      <Footer />
    </div>
  );
}
