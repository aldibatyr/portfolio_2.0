import React from 'react'
import './ProjectsContainer.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import jobreel from '../../Assets/jobreel.png';
import spacedrep from '../../Assets/spacedrep.png';
import vkuss from '../../Assets/vkuss.png';

export default class ProjectsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          title: 'JobReel',
          imageSource: jobreel,
          imageAlt: 'jobreel demo image',
          projectDescription: 'One stop for job search and making connections, think of it as a job search planner',
          technology: [
            'React',
            'Node',
            'PostgreSQL',
            'Vanilla CSS3',
            'Responsive Design'
          ],
          demo: 'https://jobreel.now.sh',
          front: 'https://github.com/thinkful-ei-dragonfly/JobReel-client',
          back: 'https://github.com/thinkful-ei-dragonfly/JobReel-server',
        },
        {
          title: 'Spaced Repetition',
          imageSource: spacedrep,
          imageAlt: 'spaced repetition image',
          projectDescription: 'Practice learning a language with the spaced repetition revision technique.',
          technology: [
            'React',
            'Node',
            'PostgreSQL',
            'Vanilla CSS3',
            'Responsive Design'
          ],
          demo: 'https://aldiyar-jonathan-spaced-repetition.now.sh/',
          front: 'https://github.com/thinkful-ei-dragonfly/spaced-repetition-aldiyar-jonathan',
          back: 'https://github.com/thinkful-ei-dragonfly/spaced-rep-api-aldiyar-jonathan',
        },
        {
          title: 'Vkuss App',
          imageSource: vkuss,
          imageAlt: 'vkuss app image',
          projectDescription: 'VkusS determines your perfect hookah flavor based on 4 simple questions. Answer these questions and we are going to generate a flavor that would perfectly fit your liking!',
          technology: [
            'React',
            'Node',
            'PostgreSQL',
            'Vanilla CSS3',
          ],
          demo: 'https://aldibatyrbekov-vkuss-app.now.sh/',
          front: 'https://github.com/thinkful-ei-dragonfly/V2-capstone-aldiyar',
          back: 'https://github.com/thinkful-ei-dragonfly/vkuss-server-aldiyar'
        }
      ]
    }
  }
  render() {
    const projects = this.state.projects.map((project, i) => 
      <ProjectCard key={i} title={project.title} imageSource={project.imageSource} imageAlt={project.imageAlt} projectDescription={project.projectDescription} technology={project.technology} demo={project.demo} front={project.front} back={project.back} dateCreated={this.state.dateCreated}/>
    )
    return (
      <div className='projectsContainer'>
        {projects}
      </div>
    )
  }
}