import Icon from '@mdi/react';
import { mdiVolumeHigh, mdiMusic, mdiHelpCircle } from '@mdi/js';

export default function Footer({ inGame }) {
  return (
    <footer className={`footer ${inGame ? 'footer-in-game' : ''}`}>
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
