import React from "react";


import {FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa' 

const HeaderSocial = () => {
  return (
    <div className="home_social">
      <a href="https://www.instagram.com/rahim.royal/" target="_blank" className="home_social-link"><FaInstagram/></a>

      <a href="https://twitter.com/Abdurrahim5z" target="_blank" className="home_social-link"><FaTwitter/></a>

      <a href="https://www.facebook.com/royal.wd" target="_blank" className="home_social-link"><FaFacebook/></a>

      <a href="https://github.com/abdurrahim220" target="_blank" className="home_social-link"><FaGithub/></a>
    </div>
  );
};

export default HeaderSocial;
