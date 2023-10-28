export function Header({ isDifficulty }) {
  return (
    <header
      className={`home__logo-container ${
        isDifficulty ? 'home__logo-container--logo-left' : ''
      }`}
    >
      <picture>
        <source srcSet="" media="(max-width: 480px)" />
        <source srcSet="" media="(max-width: 768px)" />
        <source
          srcSet="../../public/images/Logo_4.png"
          media="(min-width: 769px)"
        />

        <img
          onClick={''}
          className={`home__logo ${isDifficulty ? 'home__logo--left' : ''}`}
          srcSet="../../public/images/Logo_4.png"
          alt="logo"
        />
      </picture>
    </header>
  );
}
