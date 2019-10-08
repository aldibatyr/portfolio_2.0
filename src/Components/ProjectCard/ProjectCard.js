import React from 'react'
import './ProjectCard.css';

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      expanded: false
    }
  }

  handleExpand = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const techList = this.props.technology.map(tech => <span>{tech}</span>)
    return (
      <div className="projectCard">
        <div className='projectImage' onClick={this.handleExpand}>
          <img src={this.props.imageSource} alt={this.props.imageAlt}/>
          <div className="imgOverlay">
            <div className="links">
              <a href={this.props.front}>Client Repo</a>
              <a href={this.props.back}>Server Repo</a>
            </div>
            <div className="projectDescription">
              <p>{this.props.projectDescription}</p>
            </div>
            <div className="technology">
                {techList}
            </div>
          </div>
          </div>
        <div className="projectDemo">
          <h3><a href={this.props.demo} rel="noopener noreferrer" target="_blank">Live Demo: <span className="demoLink">{this.props.title}</span></a></h3>
        </div>
      </div>
    )
  }
}
