import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import React, { Component } from 'react'
import NewsComponent from './components/NewsComponent';

const App=()=> {
 
    return (
      <div>
        <NavBar/>
        <NewsComponent/>
      </div>
    )
  }

  export default App



