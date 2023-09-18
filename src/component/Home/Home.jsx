import React from "react";
import "./Home.css";
import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";

import me from '../../assests/'

const Home = () => {
  return (
    <section className="home container " id="home">
      <div className="intro">
        <img src={me} alt="" />
        <h1 className="home_name">Rahim </h1>
        <span className="home_education">I'm a MERN Stack Developer</span>
        <HeaderSocial />

        <a href="#contact" target="_blank" rel="noopener noreferrer">
          Hire Me
        </a>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
