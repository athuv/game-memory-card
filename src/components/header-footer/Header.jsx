import logo480 from '../../assets/images/Logo_480.png';
import logo from '../../assets/images/logo.png';

export function Header({ isDifficulty, setDifficulty, score }) {
  return (
    <header
      className={`home__logo-container ${
        isDifficulty ? 'home__logo-container--logo-left' : ''
      }`}
    >
      <picture>
        <source srcSet={logo480} media="(max-width: 748px)" />
        <source srcSet={logo} media="(min-width: 749px)" />

        <img
          onClick={() => {
            setDifficulty(null);
          }}
          className={`home__logo ${isDifficulty ? 'home__logo--left' : ''}`}
          srcSet={logo}
          alt="logo"
        />
      </picture>
      {isDifficulty && (
        <div className="score__score-container">
          <span className="score score-container__score">
            Score: {score.score}
          </span>
          <span className="score score-container__high-score ">
            High Score: {score.highScore}
          </span>
        </div>
      )}
    </header>
  );
}
