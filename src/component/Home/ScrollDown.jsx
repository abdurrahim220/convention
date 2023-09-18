import React from "react";

const ScrollDown = () => {
  return (
    <div className="scroll_down">
      <a
        href="#about"
        target="_blank"
        rel="noopener noreferrer"
        className="mouse_wrapper"
      >
        <span className="home_scroll-name"></span>
        <span className="mouse">
          <span className="wheel">Scroll Down</span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
