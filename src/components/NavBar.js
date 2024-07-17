import React, { Component } from 'react'
import PropTypes from 'prop-types'

const NavBar=(props)=> {
  
    //  
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/buss">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/ent">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/gen">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/hel">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/sci">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/spo">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/tech">Technology</a>
        </li>
        
        
        
        
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }


export default NavBar
