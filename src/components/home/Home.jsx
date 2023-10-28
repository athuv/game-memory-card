import '../../assets/styles/Home.css';
import { Header } from '../header-footer/Header';
import Footer from '../header-footer/Footer';

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
