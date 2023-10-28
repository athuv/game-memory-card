export function Header() {
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
