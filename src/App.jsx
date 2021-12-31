import React, { useState } from 'react'

import "./styles/wrapperApp.scss";
import "./styles/main-container.scss";
import "./styles/footer-container.scss";

import instagramIcon from "./assets/icon-instagram.svg";
import linkedinIcon from "./assets/icon-linkedin.svg";
import githubIcon from "./assets/icon-github.svg";
import CardClock from "./components/CardClock";
import CardModal from './components/CardModal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className='wrapper'>
      <main className='main-container'>
      {isModalVisible && <CardModal closeModal={ setIsModalVisible } />}
        <div className="main-content">
          <CardClock />
        </div>
        <div>
          <button 
            type="button" 
            className="start-timer" 
            onClick={() => setIsModalVisible(true)}
          >
            Adicionar novo timer
          </button>
          <button type="button" className="stop-timer">
            Parar o timer
          </button>
        </div>
      </main>

      <footer className='footer-container'>
        <nav className='nav'>
          <a 
            href='https://www.instagram.com/diegorb.jpeg/' 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={ instagramIcon } alt='intagram' />
          </a>
          <a 
            href='https://www.linkedin.com/in/diego-rbrito/' 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={ linkedinIcon } alt='linkedin' className="linkedin-icon" />
          </a>
          <a 
            href='https://github.com/Drb-Diego' 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={ githubIcon } alt='github' />
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
