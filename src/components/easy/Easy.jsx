import { Header } from '../header-footer/Header';
import EasyCard from './EasyCard';
import Footer from '../header-footer/Footer';
import '../../assets/styles/InGame.css';

export default function Easy({ setDifficulty }) {
  return (
    <>
      <Header setDifficulty={setDifficulty} isDifficulty={true} />
      <EasyCard />
      <Footer inGame={true} />
    </>
  );
}
