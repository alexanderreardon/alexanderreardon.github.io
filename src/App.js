import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ProjectList from './components/ProjectList.js'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Alex Reardon</h1>
        </header>
        <Header />
        <ProjectList />
        <Footer />

      </div>
    );
  }
}

export default App;
