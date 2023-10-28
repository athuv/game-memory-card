export default function Footer() {
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
