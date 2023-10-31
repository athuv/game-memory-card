export function Header({ isDifficulty, setDifficulty, score }) {
  return (
    <header
      className={`home__logo-container ${
        isDifficulty ? 'home__logo-container--logo-left' : ''
      }`}
    >
      <picture>
        <source
          srcSet="../../public/images/Logo_480.png"
          media="(max-width: 480px)"
        />
        <source srcSet="" media="(max-width: 768px)" />
        <source
          srcSet="../../public/images/Logo.png"
          media="(min-width: 769px)"
        />

        <img
          onClick={() => {
            setDifficulty(null);
          }}
          className={`home__logo ${isDifficulty ? 'home__logo--left' : ''}`}
          srcSet="../../public/images/Logo.png"
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
