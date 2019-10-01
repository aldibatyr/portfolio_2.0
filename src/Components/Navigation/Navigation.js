import React from 'react'
import './Navigation.css';
export default function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">
        ALDIYAR BATYRBEKOV
      </div>
      <div className="navLinks">
        <div className="link">
          <a href="#home">HOME</a>
        </div>
        <div className="link">
          <a href="#about">ABOUT ME</a>
        </div>
        <div className="link">
          <a href="#skills">SKILLS</a>
        </div>
        <div className="link">
          <a href="#projects">PROJECTS</a>
        </div>
        <div className="link">
          <a href="#contact">CONTACT ME</a>
        </div>

      </div>
    </div>
  )
}