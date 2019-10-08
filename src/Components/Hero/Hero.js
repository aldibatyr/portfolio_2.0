import React from 'react'
import './Hero.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Hero = () => {
  return (
    <section id="home" className="home">
      <div className="heroContent">
        <ScrollAnimation
          animateIn='slideInLeft'
          animateOut='slideOutLeft'
          duration='1.5'
        >
          <div className="contentText">
            <div className="heroTitle">
              <h1>Hello!</h1>
            </div>
            <ScrollAnimation
              animateIn='slideInLeft'
              animateOut='slideOutLeft'
              duration='1.5'
              delay='150'
            >
              <div className="heroDescription">
                <h3>I am Aldiyar.</h3>
                <h4>I am a web developer.</h4>
                <p>I specialize in React, Node, Layouts, CSS animations, and currently exploring Lottie animations.</p>
                <p>
                  This is me. My thought process. My skills, my projects, and what I enjoy doing.
                </p>
                <span>
                  Scroll down to know more about me. Cheers <span role="img" aria-label='accessible-emoji'>🎉</span>
                </span>
              </div>            
              </ScrollAnimation>
            </div>  
        </ScrollAnimation>
        <div className="gifWithFace">
          Placeholder For GIF
        </div>
      </div>

    </section>
  )
}

export default Hero;