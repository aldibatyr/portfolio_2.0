import React from 'react'
import './Contact.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contactContent">
        <ScrollAnimation
          animateIn='slideInLeft'
          animateOut='slideOutLeft'
        >
          <div className='contactText'>
            <div className='contactTitle'>
              <h1>So... This is me.</h1>
            </div>
            <ScrollAnimation
              animateIn='slideInLeft'
              animateOut='slideOutLeft'
            >
              <div className='contactMainText'>
                <h3>
                  <span className='contrastingText'>
                    Lets work together!
                  </span>
                </h3>
                <p>
                  You can contact me using buttons here.
                  I am waiting for you!
                </p>
                <p>
                  XOXO <span role='img' aria-label='accessible-emoji'>😘</span>
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
        <div className='contactImage'>
          Placeholder for picture
        </div>
        <div className='contactLinks'>
          <a href="https://linkedin.com/in/aldibatyr" rel="noopener noreferrer" target="_blank"><button className='button social'>LinkedIn</button></a>
          <a href="https://github.com/aldibatyr" rel="noopener noreferrer" target="_blank"><button className='button social'>GitHub</button></a>
          <a href="mailto:aldibatyrbekov@gmail.com" rel="noopener noreferrer" target="_blank"><button className='button social'>Email</button></a>
        </div>
      </div>
    </section>
  )
}

export default Contact;