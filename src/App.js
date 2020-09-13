import React from 'react';
import './App.css';
import Button from './components/button/button.js'
import Presentation from './components/presentation/presentation.js'
import CodeSample from './components/codeSample/codeSample.js'

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

  const handleOpenNewTab = (pageUrl) => {
    window.open(pageUrl);
  }

  return (
    <div className="mainContainter">
      <div className="leftPanel">
        <CodeSample sample={skills} />
      </div>
      <div className="rightPanel">
        <div />
        <div className="presentMe">
          <Presentation
            labelTop="Hi I'm"
            labelMid="Gustavo Tenório"
            labelBottom="FULL STACK DEVELOPER"
          >
            <Button
              label="View CV"
              pageUrl={'https://www.linkedin.com/in/gustavotenorio/'}
            />
          </Presentation>
        </div>
        <div className="socialMediaContainer">
          <Button
            label="in"
            buttonLayout="socialMedia"
            cssClass="linkedinIcon"
            pageUrl={'https://www.linkedin.com/in/gustavotenorio/'}
          />
          <Button
            label="git"
            buttonLayout="socialMedia"
            cssClass="githubIcon"
            pageUrl={'https://github.com/gustavohst'}
          />
          <Button
            label="DEV"
            buttonLayout="socialMedia"
            cssClass="devIcon"
            pageUrl={'https://dev.to/gustavohst'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
