import React from "react";
import "./Sidebar.css";
import {FaBloggerB} from 'react-icons/fa'
import { FcHome, FcAbout, FcServices,FcContacts,FcPortraitMode } from "react-icons/fc";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="/home" className="nav_logo">
        <img src={Logo} alt="" srcset="" />
      </a>

      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <FcHome />
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <FcAbout />
              </a>
            </li>
            <li className="nav_item">
              <a href="#services" className="nav_link">
                <FcServices />
              </a>
            </li>
            <li className="nav_item">
              <a href="#resume" className="nav_link"></a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className="nav_link">
                <FcPortraitMode/>
              </a>
            </li>
            <li className="nav_item">
              <a href="#blog" className="nav_link">
                <FaBloggerB/>
              </a>
            </li>
            
            <li className="nav_item">
            FcContacts <a href="#contact" className="nav_link">
                <FcContacts/>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav_footer">
        <span className="copyright">&copy: 2023</span>
      </div>
    </aside>
  );
};

export default Sidebar;
