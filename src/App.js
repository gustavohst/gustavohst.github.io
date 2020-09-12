import React from 'react';
import './App.css';

function App() {

  const skills = (
  `const devSkills = [
    'React JS',
    'Javascript',
    'HTML',
    'CSS',
    'SQL Server',
    'C#',
  ];
          
  const agile = [
    'scrum',
    'kanban'
  ];`
  );

  return (
    <div className="mainContainter">
      <div className="leftPanel">
        <pre className="preClass"> {skills} </pre>
      </div>
      <div className="rightPanel">
        <div />
        <div className="presentMe">
          <div className="commonText">Hi I'm</div>
          <div className="name">Gustavo Tenório</div>
          <span className="bigPipe" />
          <div className="commonText">FULL STACK DEVELOPER</div>
          <div className="button">
            <span>View CV</span>
          </div>
        </div>
        <div className="socialMediaContainer">
          <div className="mediumIconSquare linkedinIcon">in</div>
          <div className="mediumIconSquare githubIcon">git</div>
          <div className="mediumIconSquare devIcon">DEV</div>
        </div>
      </div>
    </div>
  );
}

export default App;
