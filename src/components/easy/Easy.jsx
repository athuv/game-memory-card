import { Header } from '../header-footer/Header';
import EasyCard from '../card/EasyCard';
import Footer from '../header-footer/Footer';
import '../../assets/styles/InGame.css';

export default function Easy() {
  return (
    <>
      <Header isDifficulty={true} />
      <EasyCard />
      <Footer inGame={true} />
    </>
  );
}
