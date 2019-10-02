import React from 'react';
import './MainContent.css';
import Navigation from '../../Components/Navigation/Navigation';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/Projects';
import Contact from '../../Components/Contact/Contact';

export default class MainContent extends React.Component{
  render() {
    return (
      <main role="main" className="content-wrapper">
        <Navigation/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    )
  }
}
