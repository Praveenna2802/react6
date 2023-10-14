import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Portfolio</h1>
        <p>Name: Praveenna</p>
        <p>Age: 19 </p>
        <p>Location: Chennai, India</p>
        <img  src={process.env.PUBLIC_URL + '/images/img.jpg'} style={{ maxWidth: '100%', width:'60%',height:'500px', borderRadius: '10px' }}></img>
      </header>
      <div className="About" id="about">
        <h2>About Me</h2>
        <p>
          Hello! This is my portfolio.
          Feel free to connect with me.
        </p>
      </div>
      <div className="Projects" id="projects">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
        
          Project 1
          Project 2
          Project 3
      
        
      </div>
      <div className="Contact" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me via email or social media:</p>
        <p>Email: <a mailto="praveenna.2021@vitstudent.ac.in">praveenna.2021@vitstudent.ac.in</a></p>
        <p>GitHub: <a href="https://github.com/Praveenna2802" target="_blank" rel="noopener noreferrer">github.com/Praveenna</a></p>
      </div>
    </div>
  );
}

export default App;
