import React from 'react';
import './ProjectsContainer.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import jobreel from '../../Assets/jobreel.png';
import spacedrep from '../../Assets/spacedrep.png';
import vkuss from '../../Assets/vkuss.png';
import waitline from '../../Assets/waitline.png';

export default class ProjectsContainer extends React.Component {
  constructor(props) {
    super(props);
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
            'Express',
            'Vanilla CSS3',
            'Responsive Design'
          ],
          demo: 'https://jobreel.now.sh',
          front: 'https://github.com/thinkful-ei-dragonfly/JobReel-client',
          back: 'https://github.com/thinkful-ei-dragonfly/JobReel-server',
        },
        {
          title: 'WaitLine',
          imageSource: waitline,
          imageAlt: 'waitline demo image',
          projectDescription: 'An app that was developed to help businesses keep track the line at the restaurant/bar/lounge',
          technology: [
            'React',
            'Node',
            'Express',
            'PostgreSQL',
            'Material UI',
          ],
          demo: 'https://waitline.now.sh',
          front: 'https://github.com/aldibatyr/waitline',
          back: 'https://github.com/aldibatyr/waitline-server',

        },
        {
          title: 'Spaced Repetition',
          imageSource: spacedrep,
          imageAlt: 'spaced repetition image',
          projectDescription: 'Practice learning a language with the spaced repetition revision technique.',
          technology: [
            'React',
            'Node',
            'Express',
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
            'Express',
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
      <div className='cardWrapper' key={i}>
        <ProjectCard title={project.title} imageSource={project.imageSource} imageAlt={project.imageAlt} projectDescription={project.projectDescription} technology={project.technology} demo={project.demo} front={project.front} back={project.back} dateCreated={this.state.dateCreated}/>
      </div>  
    )
    return (
      <div className='projectsContainer'>
        {projects}
      </div>
    )
  }
}