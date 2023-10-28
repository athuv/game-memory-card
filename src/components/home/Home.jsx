import { useState } from 'react';
import '../../assets/styles/Home.css';
import Icon from '@mdi/react';
import { mdiVolumeHigh, mdiMusic, mdiHelpCircle } from '@mdi/js';

function Header() {
  return (
    <header className="home__logo-container">
      <picture>
        <source srcSet="" media="(max-width: 480px)" />
        <source srcSet="" media="(max-width: 768px)" />
        <source
          srcSet="../../public/images/Logo_4.png"
          media="(min-width: 769px)"
        />

        <img
          className="home__logo"
          srcSet="../../public/images/Logo_4.png"
          alt="logo"
        />
      </picture>
    </header>
  );
}

function Title() {
  return (
    <section className="home__title">
      <h1>Memory Game</h1>
    </section>
  );
}

function Difficulty({ onClick }) {
  return (
    <section className="home__difficulty">
      <button
        onClick={() => {
          onClick('easy');
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          onClick('medium');
        }}
      >
        Medium
      </button>
      <button
        onClick={() => {
          onClick('hard');
        }}
      >
        Hard
      </button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <button className="footer__button footer__button--sound">
        <Icon path={mdiVolumeHigh} size={2} />
      </button>
      <button className="footer__button footer__button--music">
        <Icon path={mdiMusic} size={2} />
      </button>
      <button className="footer__button footer__button--help">
        <Icon path={mdiHelpCircle} size={2} />
      </button>
    </footer>
  );
}

export default function Home({ difficulty, setDifficulty }) {
  const handleDifficultyClick = (difficultyLevel) => {
    setDifficulty(difficultyLevel);
  };

  return (
    <>
      <Header />
      <Title />
      <Difficulty onClick={handleDifficultyClick} />
      <Footer />
    </>
  );
}
