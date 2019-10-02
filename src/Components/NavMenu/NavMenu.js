import React from 'react';
import './NavMenu.css';

export default class NavMenu extends React.Component {
  state = {
    expanded: false,
  }

  handleClick = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    return (
      <nav className={this.state.expanded ?
        "top-right open" : "top-right"
      }>
        <a onClick={this.handleClick} href="#home" className="disc l1">
          <div>Home</div>
        </a>
        <a onClick={this.handleClick} href="#about" className="disc l2">
          <div>About Me</div>
        </a>
        <a onClick={this.handleClick} href="#skills" className="disc l3">
          <div>My Skills</div>
        </a>
        <a onClick={this.handleClick} href="#projects" className="disc l4">
          <div>My Projects</div>
        </a>
        <a onClick={this.handleClick} href="#contact" className="disc l5">
		      <div>Contact Me</div>
	      </a>
        <button onClick={this.handleClick} className={"disc l6 toggle"}>
		      {this.state.expanded ? "Close" : "Menu"}
	      </button>
      </nav>
    )
  }
}