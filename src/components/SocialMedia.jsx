import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="hidden md:flex md:flex-col md:items-center md:gap-3 md:absolute md:left-0 md:bottom-8 md:after:content-[''] md:after:w-[1px] md:after:h-8 md:after:bg-GoldenYellow">
      <a href="https:://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https:://github.com" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
      <a href="https:://codepen.com" target="_blank" rel="noopener noreferrer"><FaCodepen/></a>
    </div>
  )
}

export default SocialMedia