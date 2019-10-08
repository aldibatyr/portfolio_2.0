import React from 'react';
import './Skills.css';
import Form from '../Form/Form';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
//what can i do?
//create controlled forms, crate UI, Animations, create API, Maintain Databases
const Skills = () => {
  return (
    <section id="skills" className="skills"> 
      <div className="skillsContent">
        <ScrollAnimation
          animateIn='slideInLeft'
          animateOut='slideOutLeft'
          duration='1.5'
        >
          <div className="skillsText">
            <div className='skillsTitle'>
              <h1>Skills</h1>
            </div>
            <ScrollAnimation
                animateIn='slideInLeft'
                animateOut='slideOutLeft'
                duration='1.5'
                delay='150'
              >
            <div className='skillsDescription'>
              <p>
                I can create forms with controlled inputs and validation.
              </p>
              <p>
                I can animate the layout and conditionally render elements.
              </p>
              <p>
                Type in suggested inputs to see successful login, or type anything else to see an error.
              </p>
              <p>
                Go ahead, try it out <span>☺</span>
              </p>
            </div>
          </ScrollAnimation>
        
          </div>
        </ScrollAnimation>
        <div className='formContainer'>
          <Form/>
        </div>
      </div>
    </section>
  )
}

export default Skills;