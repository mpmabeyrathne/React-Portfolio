import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="__blank">
        <FaGithub />
      </a>
      <a href="https://dribble.com.com" target="__blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
