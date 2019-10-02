import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import './WelcomePage.css';

export default class WelcomePage extends React.Component {

  state = {
    words: ['portfolio', 'vision', 'showcase', 'world', 'lifestyle', 'self']
  }
  takeToMain = () => {
    this.props.history.push('/showcase')
  }
  render() {
    return (
      <div className="welcome">
        <div className="title slide-in-left">
          <h1>Hello, welcome to my</h1>
          <h1><ReactRotatingText items={this.state.words}/></h1>
        </div>
        <div className="actionButton-wrapper">
          <button onClick={this.takeToMain} className='actionButton'>
            Let's Go
          </button>
        </div>
  
      </div>
    )
  }
  
}