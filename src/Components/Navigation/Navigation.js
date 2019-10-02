import React from 'react'
import './Navigation.css';
import NavMenu from '../NavMenu/NavMenu';
export default function Navigation() {
  return (
    <header role="navigation" className="navigation">
      <div className="logo">
        ALDIYAR BATYRBEKOV
      </div>
      <NavMenu/>
    </header>
  )
}