import React from 'react'
import './About.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="aboutContent">
        <div className="pagePrettier">

        </div>
        <div className="aboutContentText">
          <ScrollAnimation
            animateIn='slideInRight'
            animateOut='slideOutRight'
            duration='1.5'
          >
            <div className="aboutTitle">
              <h1>About</h1>
            </div>
          </ScrollAnimation>
          <div className="aboutDescription">
          <ScrollAnimation
          animateIn='slideInRight'
          animateOut='slideOutRight'
          duration='1.5'
          delay='200'
          >
            <p>
              For the past 8 years I have lived in Los Angeles, CA.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
          animateIn='slideInRight'
          animateOut='slideOutRight'
          duration='1.5'
          delay='300'
          >
            <p>
              Originally, I am from Almaty, Kazakhstan <span role="img" aria-label="emoji" className="heartEmoji"> ❤️ </span>
            </p>
          </ScrollAnimation>
          <ScrollAnimation
          animateIn='slideInRight'
          animateOut='slideOutRight'
          duration='1.5'
          delay='400'
          >
            <p>
              I love front end development, promoting my vision, and creating styles.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
          animateIn='slideInRight'
          animateOut='slideOutRight'
          duration='1.5'
          delay='500'
          >
            <p>
              I love new technology, fast cars, and quality time with friends.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
          animateIn='slideInRight'
          animateOut='slideOutRight'
          duration='1.5'
          delay='700'
          >
            <p>
              But most of all, I love designing user interfaces. <br/> 
              My daily routine consists of consuming information about technology and design, then applying the concepts in code.
            </p>
          </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;