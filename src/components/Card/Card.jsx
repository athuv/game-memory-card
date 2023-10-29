import { Header } from '../header-footer/Header';
import LevelCard from './LevelCard';
import Footer from '../header-footer/Footer';
import '../../assets/styles/InGame.css';

export default function Card({ setDifficulty }) {
  return (
    <>
      <Header setDifficulty={setDifficulty} isDifficulty={true} />
      <LevelCard />
      <Footer inGame={true} />
    </>
  );
}
