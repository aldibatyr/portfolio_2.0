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
        >
          <div className="contentText">
            <div className="heroTitle">
              <h1>Hello!</h1>
            </div>
            <ScrollAnimation
              animateIn='slideInLeft'
              animateOut='slideOutLeft'
            >
              <div className="heroDescription">
                <h3>I am Aldiyar.</h3>
                <h4>I am a <span className='contrastingText'>web developer</span> and a <span className='contrastingText'>team player</span>.</h4>
                <p>I specialize in <span className='contrastingText'>React, Node, Layouts, CSS animations,</span> and currently exploring Lottie animations.</p>
                <p>
                  This is me. My thought process. My skills, my projects, and what I enjoy doing.
                </p>
                <p>
                  I am also fluent in 3 spoken languages: <span className='contrastingText'>Kazakh</span>, <span className='contrastingText'>Russian</span>, and <span className='contrastingText'>English</span>
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