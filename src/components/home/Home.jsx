import '../../assets/styles/Home.css';
import Icon from '@mdi/react';
import { mdiVolumeHigh, mdiMusic, mdiHelpCircle } from '@mdi/js';
import { Header } from '../header/Header';

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

export default function Home({ setDifficulty }) {
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
