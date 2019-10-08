import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './Projects.css';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projectsContent">
        <div className="projectsContentText">
          <ScrollAnimation
            animateIn='slideInRight'
            animateOut='slideOutRight'
            duration='1.5'
            offset="702"
          >
            <div className="projectsTitle">
              <h1>Projects</h1>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='slideInLeft'
            animateOut='slideOutLeft'
            duration='1.5'
            delay='150'
          >
            <div className="projectsDescription">
              <p>Here are the projects that I have worked on so far.</p>
              <p>
                Please, feel free to look around. <span role='img' aria-label='accessible-emoji'>👀</span><br/>
                There are links to demo, client and server repos to each of the project
              </p>
            </div>
          </ScrollAnimation>
        </div>
          <ProjectsContainer/>
      </div>
      
    </section>
  )
}

export default Projects;